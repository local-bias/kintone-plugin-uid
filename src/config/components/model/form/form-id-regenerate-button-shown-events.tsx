import { JotaiCheckbox } from '@/components/jotai/checkbox';
import { getConditionPropertyAtom } from '@/config/states/plugin';
import { t } from '@/lib/i18n';
import { FC } from 'react';

const Component: FC = () => {
  return (
    <JotaiCheckbox
      /** @ts-expect-error 型定義不足 */
      atom={getConditionPropertyAtom('idRegenerateButtonShownEvents')}
      options={[
        {
          property: 'create',
          label: t('config.condition.idRegenerateButtonShownEvents.events.create'),
        },
        {
          property: 'edit',
          label: t('config.condition.idRegenerateButtonShownEvents.events.edit'),
        },
      ]}
    />
  );
};

const IdRegenerateButtonShownEventsForm: FC = () => {
  return <Component />;
};

export default IdRegenerateButtonShownEventsForm;
