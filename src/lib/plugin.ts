import { restorePluginConfig as restore } from '@konomi-app/kintone-utilities';
import { nanoid } from 'nanoid';
import { z } from 'zod';
import { isProd, PLUGIN_ID } from './global';
import { t } from './i18n';

const CustomRuleBaseSchema = z.object({
  id: z.string(),
  prefix: z.string(),
});

export const PluginConditionV1Schema = z.object({
  /**
   * プラグイン設定を一意に識別するためのID
   * 設定の並び替えに使用されます
   */
  id: z.string(),
  /**
   * IDを生成するフィールドのフィールドコード
   */
  fieldCode: z.string(),
  /**
   * `true`の場合、対象フィールドを編集不可にします
   */
  isFieldDisabled: z.boolean(),
  /**
   * 発行する一意のIDの生成方法
   *
   * - `nanoid`: [nanoid](https://github.com/ai/nanoid)
   * - `uuid`: [uuid](https://github.com/uuidjs/uuid)
   * - `random`: `Math.random().toString(36).slice(2)`
   * - `custom`: 複数のルールを組み合わせて生成
   */
  mode: z.union([z.literal('nanoid'), z.literal('uuid'), z.literal('random'), z.literal('custom')]),
  /**
   * `true`の場合、IDの再生成ボタンを表示します
   */
  isIDRegenerateButtonShown: z.boolean(),
  /**
   * ID再生成ボタンを表示するスペースID
   */
  idRegenerateButtonSpaceId: z.string(),
  /**
   * ID再生成ボタンのラベル
   */
  idRegenerateButtonLabel: z.string(),
  /**
   * ID再生成ボタンを表示するイベント
   */
  idRegenerateButtonShownEvents: z.object({
    create: z.boolean(),
    update: z.boolean(),
  }),
  /**
   * `true`の場合、レコード再生成時にIDを再生成します
   */
  isIDRegeneratedOnRecordReuse: z.boolean(),
  /**
   * `true`の場合、レコード一覧にID一括再生成ボタンを表示します
   */
  isBulkRegenerateButtonShown: z.boolean(),
  /**
   * カスタムID生成ルール
   */
  customIDRules: z.array(
    CustomRuleBaseSchema.merge(z.object({ type: z.literal('nanoid') }))
      .or(CustomRuleBaseSchema.merge(z.object({ type: z.literal('uuid') })))
      .or(CustomRuleBaseSchema.merge(z.object({ type: z.literal('random') })))
      .or(
        CustomRuleBaseSchema.merge(
          z.object({ type: z.literal('field_value'), fieldCode: z.string(), format: z.string() })
        )
      )
      .or(CustomRuleBaseSchema.merge(z.object({ type: z.literal('constant'), value: z.string() })))
  ),
});
export const PluginConfigV1Schema = z.object({
  version: z.literal(1),
  common: z.object({}),
  conditions: z.array(PluginConditionV1Schema),
});
type PluginConfigV1 = z.infer<typeof PluginConfigV1Schema>;

/** 🔌 プラグインがアプリ単位で保存する設定情報 */
export type PluginConfig = PluginConfigV1;

/** 🔌 プラグインの共通設定 */
export type PluginCommonConfig = PluginConfig['common'];

/** 🔌 プラグインの詳細設定 */
export type PluginCondition = PluginConfig['conditions'][number];

/** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
type AnyPluginConfig = PluginConfigV1; // | PluginConfigV2 | ...;

/**
 * プラグインの設定情報が、最新の設定情報の形式に準拠しているか検証します
 *
 * @param condition - 検証する条件オブジェクト
 * @returns プラグインの設定情報が最新の形式に準拠している場合は`true`、そうでない場合は`false`
 */
export const isPluginConditionMet = (condition: unknown): boolean => {
  try {
    PluginConditionV1Schema.parse(condition);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * プラグインの設定情報が、プラグインの利用条件を満たしているか検証します
 *
 * この条件を満たさない場合、設定情報は無効となります。
 *
 * @param condition - 検証する条件オブジェクト
 * @returns プラグインの設定情報が利用条件を満たしている場合は`true`、そうでない場合は`false`
 */
export const isUsagePluginConditionMet = (condition: PluginCondition) => {
  return !!condition.fieldCode;
};

export const getNewCondition = (): PluginCondition => ({
  id: nanoid(),
  fieldCode: '',
  isFieldDisabled: true,
  mode: 'nanoid',
  isIDRegenerateButtonShown: false,
  idRegenerateButtonSpaceId: '',
  idRegenerateButtonLabel: t('config.condition.idRegenerateButtonLabel.default'),
  idRegenerateButtonShownEvents: {
    create: true,
    update: false,
  },
  isIDRegeneratedOnRecordReuse: true,
  customIDRules: [
    {
      id: nanoid(),
      type: 'nanoid',
      prefix: '',
    },
  ],
  isBulkRegenerateButtonShown: false,
});

/**
 * プラグインの設定情報のひな形を返却します
 */
export const createConfig = (): PluginConfig => ({
  version: 1,
  common: {},
  conditions: [getNewCondition()],
});

/**
 * 古いバージョンの設定情報を新しいバージョンに変換します
 * 各バージョンは次のバージョンへの変換処理を持ち、再帰的なアクセスによって最新のバージョンに変換されます
 *
 * @param anyConfig 保存されている設定情報
 * @returns 新しいバージョンの設定情報
 */
export const migrateConfig = (anyConfig: AnyPluginConfig): PluginConfig => {
  const { version } = anyConfig;
  switch (version) {
    case undefined:
      return migrateConfig({ ...anyConfig, version: 1 });
    case 1:
    default: // `default` -> `config.js`と`desktop.js`のバージョンが一致していない場合に通る可能性があるため必要
      // もし新しいバージョンを追加したらここに追加する
      // return migrateConfig({ version: 2, ...anyConfig });
      return anyConfig;
  }
};

/**
 * プラグインの設定情報を復元します
 */
export const restorePluginConfig = (): PluginConfig => {
  const config = restore<AnyPluginConfig>(PLUGIN_ID, { debug: !isProd }) ?? createConfig();
  return migrateConfig(config);
};

export const getConditionField = <T extends keyof PluginCondition>(
  storage: PluginConfig,
  props: {
    conditionIndex: number;
    key: T;
    defaultValue: NonNullable<PluginCondition[T]>;
  }
): NonNullable<PluginCondition[T]> => {
  const { conditionIndex, key, defaultValue } = props;
  if (!storage.conditions[conditionIndex]) {
    return defaultValue;
  }
  return storage.conditions[conditionIndex][key] ?? defaultValue;
};
