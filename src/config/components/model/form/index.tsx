import { JotaiSwitch, JotaiText } from '@/components/jotai';
import { commonSettingsShownAtom, getConditionPropertyAtom } from '@/config/states/plugin';
import { t } from '@/lib/i18n';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import { useAtomValue } from 'jotai';
import { FC } from 'react';
import CommonSettings from './common';
import DeleteButton from './condition-delete-button';
import FieldsForm from './form-fields';
import { JotaiSelect } from '@/components/jotai/select';
import IdRegenerateButtonShownEventsForm from './form-id-regenerate-button-shown-events';
import CustomIDRulesForm from './form-custom-rules';
import IdRegenerateButtonSpaceIdForm from './form-id-regenerate-button-space-id';
import { JotaiTogglePanel } from '@konomi-app/kintone-utilities-jotai';

const FormContent: FC = () => {
  return (
    <div className='p-4'>
      <PluginFormSection>
        <PluginFormTitle>{t('config.condition.fieldCode.title')}</PluginFormTitle>
        <PluginFormDescription last>
          {t('config.condition.fieldCode.description')}
        </PluginFormDescription>
        <FieldsForm />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>{t('config.condition.isFieldDisabled.title')}</PluginFormTitle>
        <PluginFormDescription last>
          {t('config.condition.isFieldDisabled.description')}
        </PluginFormDescription>
        <JotaiSwitch
          atom={getConditionPropertyAtom('isFieldDisabled')}
          label={t('config.condition.isFieldDisabled.label')}
        />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>{t('config.condition.mode.title')}</PluginFormTitle>
        <PluginFormDescription last>{t('config.condition.mode.description')}</PluginFormDescription>
        <JotaiSelect
          /** @ts-expect-error 型定義不足 */
          atom={getConditionPropertyAtom('mode')}
          options={[
            { label: 'nanoid', value: 'nanoid' },
            { label: 'uuid', value: 'uuid' },
            { label: 'ランダム', value: 'random' },
            { label: 'カスタム', value: 'custom' },
          ]}
          label={t('config.condition.mode.label')}
          placeholder={t('config.condition.mode.placeholder')}
        />
      </PluginFormSection>
      <CustomIDRulesForm />
      <PluginFormSection>
        <PluginFormTitle>{t('config.condition.isIDRegenerateButtonShown.title')}</PluginFormTitle>
        <PluginFormDescription last>
          {t('config.condition.isIDRegenerateButtonShown.description')}
        </PluginFormDescription>
        <JotaiSwitch
          atom={getConditionPropertyAtom('isIDRegenerateButtonShown')}
          label={t('config.condition.isIDRegenerateButtonShown.label')}
        />
        <JotaiTogglePanel
          className='px-4 py-2 ml-4 mt-2 border-l'
          atom={getConditionPropertyAtom('isIDRegenerateButtonShown')}
        >
          <PluginFormSection>
            <h3 className='text-base font-bold'>
              {t('config.condition.idRegenerateButtonSpaceId.title')}
            </h3>
            <PluginFormDescription last>
              {t('config.condition.isIDRegenerateButtonShown.description')}
            </PluginFormDescription>
            <IdRegenerateButtonSpaceIdForm />
          </PluginFormSection>

          <PluginFormSection>
            <h3 className='text-base font-bold'>
              {t('config.condition.idRegenerateButtonShownEvents.title')}
            </h3>
            <PluginFormDescription last>
              {t('config.condition.idRegenerateButtonShownEvents.description')}
            </PluginFormDescription>
            <IdRegenerateButtonShownEventsForm />
          </PluginFormSection>
        </JotaiTogglePanel>
      </PluginFormSection>
      {/* <PluginFormSection>
        <PluginFormTitle>
          {t('config.condition.isIDRegeneratedOnRecordReuse.title')}
        </PluginFormTitle>
        <PluginFormDescription last>
          {t('config.condition.isIDRegeneratedOnRecordReuse.description')}
        </PluginFormDescription>
        <JotaiSwitch
          atom={getConditionPropertyAtom('isIDRegeneratedOnRecordReuse')}
          label={t('config.condition.isIDRegeneratedOnRecordReuse.label')}
        />
      </PluginFormSection> */}
      <PluginFormSection>
        <PluginFormTitle>{t('config.condition.isBulkRegenerateButtonShown.title')}</PluginFormTitle>
        <PluginFormDescription last>
          {t('config.condition.isBulkRegenerateButtonShown.description')}
        </PluginFormDescription>
        <JotaiSwitch
          atom={getConditionPropertyAtom('isBulkRegenerateButtonShown')}
          label={t('config.condition.isBulkRegenerateButtonShown.label')}
        />
      </PluginFormSection>

      <DeleteButton />
    </div>
  );
};

const FormContainer: FC = () => {
  const commonSettingsShown = useAtomValue(commonSettingsShownAtom);
  return commonSettingsShown ? <CommonSettings /> : <FormContent />;
};

export default FormContainer;