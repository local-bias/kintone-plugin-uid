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
      '作成するIDの生成モードを選択します。主要な生成アルゴリズムに加えて、独自のルールを設定することもできます。「ランダム」は他の生成アルゴリズムと比べて、衝突の可能性が高いため注意してください。',
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

    'config.condition.isBulkRegenerateButtonLimited.title': 'ID一括再生成ボタンの制限',
    'config.condition.isBulkRegenerateButtonLimited.description':
      'ID一括再生成ボタンの使用を制限します。スイッチがオンの場合、特定のユーザーのみがボタンを使用できます',
    'config.condition.isBulkRegenerateButtonLimited.label': 'ID一括再生成ボタンの使用を制限する',

    'config.condition.bulkRegenerateButtonShownUsers.title': 'ID一括再生成ボタンの対象ユーザー',
    'config.condition.bulkRegenerateButtonShownUsers.description':
      'ID一括再生成ボタンを表示するユーザーを指定します。指定したユーザーのみにボタンが表示され、使用することができます',
    'config.condition.bulkRegenerateButtonShownUsers.label': 'ID一括再生成ボタンの対象ユーザー',

    'config.condition.preview.title': 'ID生成プレビュー',
    'config.condition.preview.description':
      'この設定を有効にした場合に生成されるIDをプレビューできます',
    'config.condition.preview.label': 'ID(プレビュー)',
    'config.condition.preview.rerollButton.label': '再生成',

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
    'desktop.bulkRegenerate.dialog.title': '一括再生成',
    'desktop.bulkRegenerate.dialog.actions.cancel': 'キャンセル',
    'desktop.bulkRegenerate.dialog.content.confirm.text1':
      '現在表示されている全てのレコードを対象として、フィールドの値を一括で再生成します。',
    'desktop.bulkRegenerate.dialog.content.confirm.text2':
      'キー情報としてフィールドを使用している場合、他のアプリケーションとの連携に影響が出る可能性があります。',
    'desktop.bulkRegenerate.dialog.content.confirm.text3':
      'よろしければ「実行」をクリックしてください。',
    'desktop.bulkRegenerate.dialog.content.confirm.field': '対象フィールド',
    'desktop.bulkRegenerate.dialog.content.confirm.length': '対象レコード数',
    'desktop.bulkRegenerate.dialog.content.confirm.unit': '件',
    'desktop.bulkRegenerate.dialog.content.success': 'レコードの更新が完了しました',
    'desktop.bulkRegenerate.dialog.content.loader.getRecords': '対象レコードを取得しています',
    'desktop.bulkRegenerate.dialog.content.loader.updateRecords': 'レコードを更新しています',
    'desktop.bulkRegenerate.dialog.content.error.getRecords': 'レコードの取得に失敗しました',
    'desktop.bulkRegenerate.dialog.content.error.updateRecords': 'レコードの更新に失敗しました',
    'desktop.bulkRegenerate.dialog.actions.back': '戻る',
    'desktop.bulkRegenerate.dialog.actions.run': '実行',
    'desktop.bulkRegenerate.dialog.actions.close': '閉じる',
  },
  en: {
    'error.config.root':
      'Root element not found in plugin HTML. An element with id="settings" is required to render plugin settings.',

    'config.condition.fieldCode.title': 'Target Field',
    'config.condition.fieldCode.description': 'Select the field to generate IDs for',
    'config.condition.fieldCode.label': 'Target Field',
    'config.condition.fieldCode.placeholder': 'Select field',

    'config.condition.isFieldDisabled.title': 'Field Editability',
    'config.condition.isFieldDisabled.description':
      'Configure whether the specified field can be edited. When enabled, users cannot edit the field.',
    'config.condition.isFieldDisabled.label': 'Disable field editing',

    'config.condition.mode.title': 'ID Generation Mode',
    'config.condition.mode.description':
      'Select the ID generation mode. In addition to major generation algorithms, you can also set custom rules. Note that "Random" has a higher collision probability compared to other algorithms.',
    'config.condition.mode.label': 'Generation Mode',
    'config.condition.mode.placeholder': 'Select generation mode',

    'config.condition.isIDRegenerateButtonShown.title': 'Show ID Regenerate Button',
    'config.condition.isIDRegenerateButtonShown.description':
      'Show an ID regeneration button in the specified space field',
    'config.condition.isIDRegenerateButtonShown.label': 'Show ID regenerate button',

    'config.condition.idRegenerateButtonLabel.title': 'ID Regenerate Button Label',
    'config.condition.idRegenerateButtonLabel.description':
      'Set the label for the ID regeneration button',
    'config.condition.idRegenerateButtonLabel.label': 'Label',
    'config.condition.idRegenerateButtonLabel.placeholder': 'Regenerate',
    'config.condition.idRegenerateButtonLabel.default': 'Regenerate',

    'config.condition.idRegenerateButtonSpaceId.title': 'ID Regenerate Button Space Field',
    'config.condition.idRegenerateButtonSpaceId.description':
      'Specify the space field where the ID regeneration button will be shown',
    'config.condition.idRegenerateButtonSpaceId.label': 'Space Field',

    'config.condition.idRegenerateButtonShownEvents.title': 'ID Regenerate Button Display Events',
    'config.condition.idRegenerateButtonShownEvents.description':
      'Select when to show the ID regeneration button',
    'config.condition.idRegenerateButtonShownEvents.events.create': 'On record creation',
    'config.condition.idRegenerateButtonShownEvents.events.edit': 'On record edit',

    'config.condition.isIDRegeneratedOnRecordReuse.title': 'ID Regeneration on Record Reuse',
    'config.condition.isIDRegeneratedOnRecordReuse.description':
      'Choose whether to regenerate IDs when reusing records. When enabled, the ID will be regenerated and overwritten. When disabled, no regeneration occurs.',
    'config.condition.isIDRegeneratedOnRecordReuse.label': 'Regenerate ID on record reuse',

    'config.condition.isBulkRegenerateButtonShown.title': 'Show Bulk ID Regenerate Button',
    'config.condition.isBulkRegenerateButtonShown.description':
      'Show a button in the record list to regenerate IDs for all filtered records',
    'config.condition.isBulkRegenerateButtonShown.label': 'Show bulk ID regenerate button',

    'config.condition.isBulkRegenerateButtonLimited.title': 'Restrict Bulk ID Regenerate Button',
    'config.condition.isBulkRegenerateButtonLimited.description':
      'Restrict usage of the bulk ID regeneration button. When enabled, only specific users can use the button.',
    'config.condition.isBulkRegenerateButtonLimited.label':
      'Restrict bulk ID regenerate button usage',

    'config.condition.bulkRegenerateButtonShownUsers.title': 'Bulk ID Regenerate Button Users',
    'config.condition.bulkRegenerateButtonShownUsers.description':
      'Specify which users can see and use the bulk ID regeneration button',
    'config.condition.bulkRegenerateButtonShownUsers.label': 'Bulk ID regenerate button users',

    'config.condition.preview.title': 'ID Generation Preview',
    'config.condition.preview.description':
      'Preview the ID that will be generated with these settings',
    'config.condition.preview.label': 'ID (Preview)',
    'config.condition.preview.rerollButton.label': 'Regenerate',

    'config.condition.customIDRules.title': 'Custom Rules',
    'config.condition.customIDRules.description':
      'Configure custom ID generation rules. Only valid when "Custom" generation mode is selected.',
    'config.condition.customIDRules.rules.add': 'Add rule',
    'config.condition.customIDRules.rules.delete': 'Delete this rule',
    'config.condition.customIDRules.prefix.label': 'Prefix text',
    'config.condition.customIDRules.prefix.placeholder': '-, /, # etc',
    'config.condition.customIDRules.constant.label': 'Constant value',
    'config.condition.customIDRules.constant.placeholder': 'Enter constant value',

    'config.condition.isSampleUIShown.label': 'Show sample UI',
    'config.sidebar.tab.common.label': 'Common Settings',
    'config.sidebar.tab.label': 'Settings',
    'config.button.save': 'Save settings',
    'config.button.return': 'Return to plugin list',
    'config.toast.save': 'Settings saved',
    'config.toast.reset': 'Settings reset',
    'config.toast.import': 'Settings imported',
    'config.toast.export': 'Plugin settings exported',
    'config.error.import': 'Failed to import settings. Please check the file for errors.',
    'config.error.export': 'Failed to export plugin settings. Please contact the plugin developer.',

    'desktop.bulkRegenerate.dialog.title': 'Bulk Regenerate',
    'desktop.bulkRegenerate.dialog.actions.cancel': 'Cancel',
    'desktop.bulkRegenerate.dialog.content.confirm.text1':
      'This will regenerate field values for all currently displayed records.',
    'desktop.bulkRegenerate.dialog.content.confirm.text2':
      'If the field is used as key information, this may affect integrations with other applications.',
    'desktop.bulkRegenerate.dialog.content.confirm.text3': 'Click "Execute" to proceed.',
    'desktop.bulkRegenerate.dialog.content.confirm.field': 'Target field',
    'desktop.bulkRegenerate.dialog.content.confirm.length': 'Number of records',
    'desktop.bulkRegenerate.dialog.content.confirm.unit': 'records',
    'desktop.bulkRegenerate.dialog.content.success': 'Records updated successfully',
    'desktop.bulkRegenerate.dialog.content.loader.getRecords': 'Getting target records',
    'desktop.bulkRegenerate.dialog.content.loader.updateRecords': 'Updating records',
    'desktop.bulkRegenerate.dialog.content.error.getRecords': 'Failed to get records',
    'desktop.bulkRegenerate.dialog.content.error.updateRecords': 'Failed to update records',
    'desktop.bulkRegenerate.dialog.actions.back': 'Back',
    'desktop.bulkRegenerate.dialog.actions.run': 'Execute',
    'desktop.bulkRegenerate.dialog.actions.close': 'Close',
  },
  es: {
    'error.config.root':
      'No se encontró el elemento raíz en el HTML del plugin. Se requiere un elemento con id="settings" para renderizar la configuración del plugin.',

    'config.condition.fieldCode.title': 'Campo objetivo',
    'config.condition.fieldCode.description': 'Seleccione el campo para generar IDs',
    'config.condition.fieldCode.label': 'Campo objetivo',
    'config.condition.fieldCode.placeholder': 'Seleccionar campo',

    'config.condition.isFieldDisabled.title': 'Editabilidad del campo',
    'config.condition.isFieldDisabled.description':
      'Configure si el campo especificado puede ser editado. Cuando está activado, los usuarios no pueden editar el campo.',
    'config.condition.isFieldDisabled.label': 'Deshabilitar edición de campo',

    'config.condition.mode.title': 'Modo de generación de ID',
    'config.condition.mode.description':
      'Seleccione el modo de generación de ID. Además de los algoritmos principales de generación, también puede establecer reglas personalizadas. Tenga en cuenta que "Aleatorio" tiene una mayor probabilidad de colisión en comparación con otros algoritmos.',
    'config.condition.mode.label': 'Modo de generación',
    'config.condition.mode.placeholder': 'Seleccionar modo de generación',

    'config.condition.isIDRegenerateButtonShown.title': 'Mostrar botón de regeneración de ID',
    'config.condition.isIDRegenerateButtonShown.description':
      'Mostrar un botón de regeneración de ID en el campo de espacio especificado',
    'config.condition.isIDRegenerateButtonShown.label': 'Mostrar botón de regeneración de ID',

    'config.condition.idRegenerateButtonLabel.title': 'Etiqueta del botón de regeneración de ID',
    'config.condition.idRegenerateButtonLabel.description':
      'Establecer la etiqueta para el botón de regeneración de ID',
    'config.condition.idRegenerateButtonLabel.label': 'Etiqueta',
    'config.condition.idRegenerateButtonLabel.placeholder': 'Regenerar',
    'config.condition.idRegenerateButtonLabel.default': 'Regenerar',

    'config.condition.idRegenerateButtonSpaceId.title':
      'Campo de espacio para el botón de regeneración de ID',
    'config.condition.idRegenerateButtonSpaceId.description':
      'Especifique el campo de espacio donde se mostrará el botón de regeneración de ID',
    'config.condition.idRegenerateButtonSpaceId.label': 'Campo de espacio',

    'config.condition.idRegenerateButtonShownEvents.title':
      'Eventos de visualización del botón de regeneración de ID',
    'config.condition.idRegenerateButtonShownEvents.description':
      'Seleccione cuándo mostrar el botón de regeneración de ID',
    'config.condition.idRegenerateButtonShownEvents.events.create': 'Al crear registro',
    'config.condition.idRegenerateButtonShownEvents.events.edit': 'Al editar registro',

    'config.condition.isIDRegeneratedOnRecordReuse.title':
      'Regeneración de ID al reutilizar registro',
    'config.condition.isIDRegeneratedOnRecordReuse.description':
      'Elija si desea regenerar IDs al reutilizar registros. Cuando está activado, el ID se regenerará y sobrescribirá. Cuando está desactivado, no ocurre regeneración.',
    'config.condition.isIDRegeneratedOnRecordReuse.label': 'Regenerar ID al reutilizar registro',

    'config.condition.isBulkRegenerateButtonShown.title':
      'Mostrar botón de regeneración masiva de ID',
    'config.condition.isBulkRegenerateButtonShown.description':
      'Mostrar un botón en la lista de registros para regenerar IDs para todos los registros filtrados',
    'config.condition.isBulkRegenerateButtonShown.label':
      'Mostrar botón de regeneración masiva de ID',

    'config.condition.isBulkRegenerateButtonLimited.title':
      'Restringir botón de regeneración masiva de ID',
    'config.condition.isBulkRegenerateButtonLimited.description':
      'Restringir el uso del botón de regeneración masiva de ID. Cuando está activado, solo usuarios específicos pueden usar el botón.',
    'config.condition.isBulkRegenerateButtonLimited.label':
      'Restringir uso del botón de regeneración masiva de ID',

    'config.condition.bulkRegenerateButtonShownUsers.title':
      'Usuarios del botón de regeneración masiva de ID',
    'config.condition.bulkRegenerateButtonShownUsers.description':
      'Especifique qué usuarios pueden ver y usar el botón de regeneración masiva de ID',
    'config.condition.bulkRegenerateButtonShownUsers.label':
      'Usuarios del botón de regeneración masiva de ID',

    'config.condition.preview.title': 'Vista previa de generación de ID',
    'config.condition.preview.description':
      'Vista previa del ID que se generará con esta configuración',
    'config.condition.preview.label': 'ID (Vista previa)',
    'config.condition.preview.rerollButton.label': 'Regenerar',

    'config.condition.customIDRules.title': 'Reglas personalizadas',
    'config.condition.customIDRules.description':
      'Configure reglas personalizadas de generación de ID. Solo válido cuando se selecciona el modo de generación "Personalizado".',
    'config.condition.customIDRules.rules.add': 'Agregar regla',
    'config.condition.customIDRules.rules.delete': 'Eliminar esta regla',
    'config.condition.customIDRules.prefix.label': 'Texto de prefijo',
    'config.condition.customIDRules.prefix.placeholder': '-, /, # etc',
    'config.condition.customIDRules.constant.label': 'Valor constante',
    'config.condition.customIDRules.constant.placeholder': 'Ingresar valor constante',

    'config.condition.isSampleUIShown.label': 'Mostrar UI de ejemplo',
    'config.sidebar.tab.common.label': 'Configuración común',
    'config.sidebar.tab.label': 'Configuración',
    'config.button.save': 'Guardar configuración',
    'config.button.return': 'Volver a lista de plugins',
    'config.toast.save': 'Configuración guardada',
    'config.toast.reset': 'Configuración restablecida',
    'config.toast.import': 'Configuración importada',
    'config.toast.export': 'Configuración del plugin exportada',
    'config.error.import': 'Error al importar la configuración. Por favor verifique el archivo.',
    'config.error.export':
      'Error al exportar la configuración del plugin. Contacte al desarrollador del plugin.',

    'desktop.bulkRegenerate.dialog.title': 'Regeneración masiva',
    'desktop.bulkRegenerate.dialog.actions.cancel': 'Cancelar',
    'desktop.bulkRegenerate.dialog.content.confirm.text1':
      'Esto regenerará los valores de campo para todos los registros mostrados actualmente.',
    'desktop.bulkRegenerate.dialog.content.confirm.text2':
      'Si el campo se usa como información clave, esto puede afectar las integraciones con otras aplicaciones.',
    'desktop.bulkRegenerate.dialog.content.confirm.text3':
      'Haga clic en "Ejecutar" para continuar.',
    'desktop.bulkRegenerate.dialog.content.confirm.field': 'Campo objetivo',
    'desktop.bulkRegenerate.dialog.content.confirm.length': 'Número de registros',
    'desktop.bulkRegenerate.dialog.content.confirm.unit': 'registros',
    'desktop.bulkRegenerate.dialog.content.success': 'Registros actualizados exitosamente',
    'desktop.bulkRegenerate.dialog.content.loader.getRecords': 'Obteniendo registros objetivo',
    'desktop.bulkRegenerate.dialog.content.loader.updateRecords': 'Actualizando registros',
    'desktop.bulkRegenerate.dialog.content.error.getRecords': 'Error al obtener registros',
    'desktop.bulkRegenerate.dialog.content.error.updateRecords': 'Error al actualizar registros',
    'desktop.bulkRegenerate.dialog.actions.back': 'Atrás',
    'desktop.bulkRegenerate.dialog.actions.run': 'Ejecutar',
    'desktop.bulkRegenerate.dialog.actions.close': 'Cerrar',
  },
  zh: {
    'error.config.root': '插件HTML中未找到根元素。渲染插件设置需要id="settings"元素。',

    'config.condition.fieldCode.title': '目标字段',
    'config.condition.fieldCode.description': '请选择要生成ID的字段',
    'config.condition.fieldCode.label': '目标字段',
    'config.condition.fieldCode.placeholder': '选择字段',

    'config.condition.isFieldDisabled.title': '字段可编辑性',
    'config.condition.isFieldDisabled.description':
      '设置指定字段是否可编辑。启用时，用户将无法编辑该字段。',
    'config.condition.isFieldDisabled.label': '禁用字段编辑',

    'config.condition.mode.title': 'ID生成模式',
    'config.condition.mode.description':
      '选择ID生成模式。除了主要生成算法外，还可以设置自定义规则。请注意"随机"模式相比其他算法有更高的冲突概率。',
    'config.condition.mode.label': '生成模式',
    'config.condition.mode.placeholder': '选择生成模式',

    'config.condition.isIDRegenerateButtonShown.title': '显示ID重新生成按钮',
    'config.condition.isIDRegenerateButtonShown.description':
      '在指定的空间字段中显示ID重新生成按钮',
    'config.condition.isIDRegenerateButtonShown.label': '显示ID重新生成按钮',

    'config.condition.idRegenerateButtonLabel.title': 'ID重新生成按钮标签',
    'config.condition.idRegenerateButtonLabel.description': '设置ID重新生成按钮的标签文本',
    'config.condition.idRegenerateButtonLabel.label': '标签',
    'config.condition.idRegenerateButtonLabel.placeholder': '重新生成',
    'config.condition.idRegenerateButtonLabel.default': '重新生成',

    'config.condition.idRegenerateButtonSpaceId.title': 'ID重新生成按钮空间字段',
    'config.condition.idRegenerateButtonSpaceId.description': '指定显示ID重新生成按钮的空间字段',
    'config.condition.idRegenerateButtonSpaceId.label': '空间字段',

    'config.condition.idRegenerateButtonShownEvents.title': 'ID重新生成按钮显示事件',
    'config.condition.idRegenerateButtonShownEvents.description': '选择何时显示ID重新生成按钮',
    'config.condition.idRegenerateButtonShownEvents.events.create': '创建记录时',
    'config.condition.idRegenerateButtonShownEvents.events.edit': '编辑记录时',

    'config.condition.isIDRegeneratedOnRecordReuse.title': '记录重用时重新生成ID',
    'config.condition.isIDRegeneratedOnRecordReuse.description':
      '选择在重用记录时是否重新生成ID。启用时，将使用重新生成的值覆盖ID。禁用时，不会进行重新生成。',
    'config.condition.isIDRegeneratedOnRecordReuse.label': '记录重用时重新生成ID',

    'config.condition.isBulkRegenerateButtonShown.title': '显示批量重新生成ID按钮',
    'config.condition.isBulkRegenerateButtonShown.description':
      '在记录列表中显示一个按钮，用于对所有筛选的记录重新生成ID',
    'config.condition.isBulkRegenerateButtonShown.label': '显示批量重新生成ID按钮',

    'config.condition.isBulkRegenerateButtonLimited.title': '限制批量重新生成ID按钮',
    'config.condition.isBulkRegenerateButtonLimited.description':
      '限制批量重新生成ID按钮的使用。启用时，只有特定用户可以使用该按钮。',
    'config.condition.isBulkRegenerateButtonLimited.label': '限制批量重新生成ID按钮使用',

    'config.condition.bulkRegenerateButtonShownUsers.title': '批量重新生成ID按钮用户',
    'config.condition.bulkRegenerateButtonShownUsers.description':
      '指定哪些用户可以看到并使用批量重新生成ID按钮',
    'config.condition.bulkRegenerateButtonShownUsers.label': '批量重新生成ID按钮用户',

    'config.condition.preview.title': 'ID生成预览',
    'config.condition.preview.description': '预览使用这些设置将生成的ID',
    'config.condition.preview.label': 'ID（预览）',
    'config.condition.preview.rerollButton.label': '重新生成',

    'config.condition.customIDRules.title': '自定义规则',
    'config.condition.customIDRules.description':
      '配置自定义ID生成规则。仅在选择"自定义"生成模式时有效。',
    'config.condition.customIDRules.rules.add': '添加规则',
    'config.condition.customIDRules.rules.delete': '删除此规则',
    'config.condition.customIDRules.prefix.label': '前缀文本',
    'config.condition.customIDRules.prefix.placeholder': '-, /, # 等',
    'config.condition.customIDRules.constant.label': '固定值',
    'config.condition.customIDRules.constant.placeholder': '输入固定值',

    'config.condition.isSampleUIShown.label': '显示示例UI',
    'config.sidebar.tab.common.label': '通用设置',
    'config.sidebar.tab.label': '设置',
    'config.button.save': '保存设置',
    'config.button.return': '返回插件列表',
    'config.toast.save': '设置已保存',
    'config.toast.reset': '设置已重置',
    'config.toast.import': '设置已导入',
    'config.toast.export': '插件设置已导出',
    'config.error.import': '导入设置失败。请检查文件是否有错误。',
    'config.error.export': '导出插件设置失败。请联系插件开发者。',

    'desktop.bulkRegenerate.dialog.title': '批量重新生成',
    'desktop.bulkRegenerate.dialog.actions.cancel': '取消',
    'desktop.bulkRegenerate.dialog.content.confirm.text1':
      '这将为当前显示的所有记录重新生成字段值。',
    'desktop.bulkRegenerate.dialog.content.confirm.text2':
      '如果该字段用作关键信息，可能会影响与其他应用程序的集成。',
    'desktop.bulkRegenerate.dialog.content.confirm.text3': '点击"执行"继续。',
    'desktop.bulkRegenerate.dialog.content.confirm.field': '目标字段',
    'desktop.bulkRegenerate.dialog.content.confirm.length': '记录数量',
    'desktop.bulkRegenerate.dialog.content.confirm.unit': '条',
    'desktop.bulkRegenerate.dialog.content.success': '记录更新成功',
    'desktop.bulkRegenerate.dialog.content.loader.getRecords': '正在获取目标记录',
    'desktop.bulkRegenerate.dialog.content.loader.updateRecords': '正在更新记录',
    'desktop.bulkRegenerate.dialog.content.error.getRecords': '获取记录失败',
    'desktop.bulkRegenerate.dialog.content.error.updateRecords': '更新记录失败',
    'desktop.bulkRegenerate.dialog.actions.back': '返回',
    'desktop.bulkRegenerate.dialog.actions.run': '执行',
    'desktop.bulkRegenerate.dialog.actions.close': '关闭',
  },
} as const;

export type Language = keyof typeof ui;

export const defaultLang = 'ja' satisfies Language;

const isSupportedLang = (lang: string): lang is Language => lang in ui;

/**
 * 指定された言語に対応する翻訳関数を返します。
 * @param lang - 言語のキー
 * @returns 指定された言語に対応する翻訳関数
 */
export function useTranslations(lang: string = defaultLang) {
  const validLang = isSupportedLang(lang) ? lang : defaultLang;

  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    /* eslint @typescript-eslint/ban-ts-comment: 0 */
    // @ts-ignore デフォルト言語以外の設定が不十分な場合は、デフォルト言語の設定を使用します
    return ui[validLang][key] ?? ui[defaultLang][key];
  };
}

export const t = useTranslations(LANGUAGE);

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
