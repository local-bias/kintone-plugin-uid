import { createTheme } from '@mui/material';
import { LANGUAGE } from './global';
import { enUS, esES, jaJP, zhCN } from '@mui/material/locale';

export const ui = {
  ja: {
    'error.config.root':
      'プラグインのHTMLに、ルート要素が存在しません。プラグイン設定をレンダリングするためには、id="settings"の要素が必要です。',

    'config.condition.fieldCode.title': '対象フィールド',
    'config.condition.fieldCode.description': 'IDを生成するフィールドを指定してください',
    'config.condition.fieldCode.label': '対象フィールド',
    'config.condition.fieldCode.placeholder': 'フィールドを選択',

    'config.condition.isFieldDisabled.title': 'フィールドの編集可否',
    'config.condition.isFieldDisabled.description':
      '指定したフィールドの編集可否を設定します。スイッチがオンの場合、ユーザーによってフィールドが編集できなくなります',
    'config.condition.isFieldDisabled.label': 'フィールドを編集不可にする',

    'config.condition.mode.title': 'ID生成モード',
    'config.condition.mode.description':
      '作成するIDの生成モードを選択します。主要な生成アルゴリズムに加えて、独自のルールを設定することもできます。',
    'config.condition.mode.label': '生成モード',
    'config.condition.mode.placeholder': '生成モードを選択',

    'config.condition.isIDRegenerateButtonShown.title': 'ID再生成ボタンの表示',
    'config.condition.isIDRegenerateButtonShown.description':
      '指定したスペースフィールドに、ID再生成ボタンを表示することができます',
    'config.condition.isIDRegenerateButtonShown.label': 'ID再生成ボタンを表示する',

    'config.condition.idRegenerateButtonLabel.title': 'ID再生成ボタンのラベル',
    'config.condition.idRegenerateButtonLabel.description': 'ID再生成ボタンのラベルを設定します',
    'config.condition.idRegenerateButtonLabel.label': 'ラベル',
    'config.condition.idRegenerateButtonLabel.placeholder': '再生成',
    'config.condition.idRegenerateButtonLabel.default': '再生成',

    'config.condition.idRegenerateButtonSpaceId.title': 'ID再生成ボタンのスペースフィールド',
    'config.condition.idRegenerateButtonSpaceId.description':
      'ID再生成ボタンを表示するスペースフィールドを指定します',
    'config.condition.idRegenerateButtonSpaceId.label': 'スペースフィールド',

    'config.condition.idRegenerateButtonShownEvents.title': 'ID再生成ボタンの表示イベント',
    'config.condition.idRegenerateButtonShownEvents.description':
      'ID再生成ボタンを表示するイベントを選択します',
    'config.condition.idRegenerateButtonShownEvents.events.create': 'レコード作成時',
    'config.condition.idRegenerateButtonShownEvents.events.edit': 'レコード編集時',

    'config.condition.isIDRegeneratedOnRecordReuse.title': 'レコード再利用時のID再生成',
    'config.condition.isIDRegeneratedOnRecordReuse.description':
      'レコード再利用時、IDを再生成するか選択します。スイッチがオンの場合、IDを再生成した値で上書きします。スイッチをオフにした場合、再生成は実行されません',
    'config.condition.isIDRegeneratedOnRecordReuse.label': 'レコード再利用時にIDを再生成する',

    'config.condition.isBulkRegenerateButtonShown.title': 'ID一括再生成ボタンの表示',
    'config.condition.isBulkRegenerateButtonShown.description':
      'レコード一覧に、絞り込まれたレコード全てに対してIDを再生成するボタンを表示します',
    'config.condition.isBulkRegenerateButtonShown.label': 'ID一括再生成ボタンを表示する',

    'config.condition.customIDRules.title': 'カスタムルール',
    'config.condition.customIDRules.description':
      'ID生成のカスタムルールを設定します。ID生成モードが「カスタム」の場合のみ有効です',
    'config.condition.customIDRules.rules.add': 'ルールを追加する',
    'config.condition.customIDRules.rules.delete': 'このルールを削除する',
    'config.condition.customIDRules.prefix.label': '手前に表示するテキスト',
    'config.condition.customIDRules.prefix.placeholder': '-, /, # など',
    'config.condition.customIDRules.constant.label': '固定値',
    'config.condition.customIDRules.constant.placeholder': '固定値を入力',

    'config.condition.isSampleUIShown.label': 'サンプルUIを表示',
    'config.sidebar.tab.common.label': '共通設定',
    'config.sidebar.tab.label': '設定',
    'config.button.save': '設定を保存',
    'config.button.return': 'プラグイン一覧へ戻る',
    'config.toast.save': '設定を保存しました',
    'config.toast.reset': '設定をリセットしました',
    'config.toast.import': '設定情報をインポートしました',
    'config.toast.export': 'プラグインの設定情報をエクスポートしました',
    'config.error.import':
      '設定情報のインポートに失敗しました、ファイルに誤りがないか確認してください',
    'config.error.export':
      'プラグインの設定情報のエクスポートに失敗しました。プラグイン開発者にお問い合わせください。',
    'desktop.dialogtrigger.title': 'プラグインが有効です',
    'desktop.dialogtrigger.content': 'クリックするとイベントの詳細を確認できます',
    'desktop.dialog.title': 'プラグインの設定情報',
  },
  en: {
    'error.config.root':
      'The root element does not exist in the plugin HTML. To render the plugin configuration, an element with id="settings" is required.',
    'config.condition.memo.title': 'Memo',
    'config.condition.memo.description':
      'This setting is a sample. You can save text information in the plugin.',
    'config.condition.memo.label': '📝 Memo',
    'config.condition.memo.placeholder': 'Enter text',
    'config.condition.field.title': 'Target Field',
    'config.condition.field.description':
      'This setting is a sample. It retrieves and displays a list of fields from the app configuration.',
    'config.condition.isSampleUIShown.title': 'Switch Sample',
    'config.condition.isSampleUIShown.description':
      'This is a sample of a switch that toggles between enabled and disabled. Here, it toggles whether to display a sample UI in the record list.',
    'config.condition.isSampleUIShown.label': 'Show Sample UI',

    'config.sidebar.tab.label': 'Settings',
    'config.button.save': 'Save Settings',
    'config.button.return': 'Return to Plugin List',
    'config.toast.save': 'Settings saved',
    'config.toast.reset': 'Settings reset',
    'config.toast.import': 'Settings imported',
    'config.toast.export': 'Plugin settings exported',
    'config.error.root':
      'The root element does not exist in the plugin HTML. To render the plugin configuration, an element with id="settings" is required.',
    'config.error.import': 'Failed to import settings. Please check the file for errors.',
    'config.error.export':
      'Failed to export the plugin settings. Please contact the plugin developer.',
    'desktop.dialogtrigger.title': 'The plugin is enabled',
    'desktop.dialogtrigger.content': 'Click to view event details',
    'desktop.dialog.title': 'Plugin Configuration',
  },
  es: {
    'error.config.root':
      'El elemento raíz no existe en el HTML del plugin. Para renderizar la configuración del plugin, se requiere un elemento con id="settings".',
    'config.condition.memo.title': 'Memo',
    'config.condition.memo.description':
      'Esta configuración es un ejemplo. Puede guardar información de texto en el plugin.',
    'config.condition.memo.label': '📝 Memo',
    'config.condition.memo.placeholder': 'Ingrese texto',
    'config.condition.field.title': 'Campo objetivo',
    'config.condition.field.description':
      'Esta configuración es un ejemplo. Recupera y muestra una lista de campos de la configuración de la aplicación.',
    'config.condition.isSampleUIShown.title': 'Ejemplo de interruptor',
    'config.condition.isSampleUIShown.description':
      'Este es un ejemplo de un interruptor que alterna entre habilitado y deshabilitado. Aquí, alterna si se muestra una interfaz de usuario de ejemplo en la lista de registros.',
    'config.condition.isSampleUIShown.label': 'Mostrar interfaz de usuario de ejemplo',

    'config.sidebar.tab.label': 'Configuración',
    'config.button.save': 'Guardar configuración',
    'config.button.return': 'Volver a la lista de plugins',
    'config.toast.save': 'Configuración guardada',
    'config.toast.reset': 'Configuración restablecida',
    'config.toast.import': 'Configuración importada',
    'config.toast.export': 'Configuración del plugin exportada',
    'config.error.root':
      'El elemento raíz no existe en el HTML del plugin. Para renderizar la configuración del plugin, se requiere un elemento con id="settings".',
    'config.error.import':
      'Error al importar la configuración. Por favor, verifique que el archivo no contenga errores.',
    'config.error.export':
      'Error al exportar la configuración del plugin. Por favor, contacte al desarrollador del plugin.',
    'desktop.dialogtrigger.title': 'El plugin está habilitado',
    'desktop.dialogtrigger.content': 'Haz clic para ver los detalles del evento',
    'desktop.dialog.title': 'Información de configuración del plugin',
  },
  zh: {
    'error.config.root': '插件的HTML中不存在根元素。要渲染插件配置，需要一个id="settings"的元素。',
    'config.condition.memo.title': '备忘录',
    'config.condition.memo.description': '这是一个示例设置。您可以在插件中保存文本信息。',
    'config.condition.memo.label': '📝 备忘录',
    'config.condition.memo.placeholder': '输入文本',
    'config.condition.field.title': '目标字段',
    'config.condition.field.description':
      '这是一个示例设置。它从应用程序配置中检索并显示字段列表。',
    'config.condition.isSampleUIShown.title': '开关示例',
    'config.condition.isSampleUIShown.description':
      '这是一个开关示例，可以在启用和禁用之间切换。在这里，它切换是否在记录列表中显示示例UI。',
    'config.condition.isSampleUIShown.label': '显示示例UI',

    'config.sidebar.tab.label': '设置',
    'config.button.save': '保存设置',
    'config.button.return': '返回插件列表',
    'config.toast.save': '设置已保存',
    'config.toast.reset': '设置已重置',
    'config.toast.import': '已导入设置',
    'config.toast.export': '已导出插件设置',
    'config.error.root': '插件的HTML中不存在根元素。要渲染插件配置，需要一个id="settings"的元素。',
    'config.error.import': '导入设置失败。请检查文件是否有误。',
    'config.error.export': '导出插件设置失败。请联系插件开发者。',
    'desktop.dialogtrigger.title': '插件已启用',
    'desktop.dialogtrigger.content': '单击以查看事件详细信息',
    'desktop.dialog.title': '插件的配置信息',
  },
} as const;

export type Language = keyof typeof ui;

export const defaultLang = 'ja' satisfies Language;

/**
 * 指定された言語に対応する翻訳関数を返します。
 * @param lang - 言語のキー
 * @returns 指定された言語に対応する翻訳関数
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    /* eslint @typescript-eslint/ban-ts-comment: 0 */
    // @ts-ignore デフォルト言語以外の設定が不十分な場合は、デフォルト言語の設定を使用します
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export const t = useTranslations(LANGUAGE as Language);

const getMUILang = () => {
  switch (LANGUAGE) {
    case 'en': {
      return enUS;
    }
    case 'zh': {
      return zhCN;
    }
    case 'es': {
      return esES;
    }
    case 'ja':
    default: {
      return jaJP;
    }
  }
};

export const getMUITheme = () => {
  return createTheme(
    {
      palette: {
        primary: {
          main: '#3498db',
        },
      },
    },
    getMUILang()
  );
};
