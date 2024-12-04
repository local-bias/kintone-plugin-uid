import { loadingAtom } from '@/desktop/public-state';
import { t } from '@/lib/i18n';
import { CheckAnimation, LoaderWithLabel } from '@konomi-app/ui-react';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { errorMessageAtom, recordsAtom } from '../states';
import { useCondition } from './condition-context';

export const DialogContentStep1: FC = () => {
  const { condition } = useCondition();
  const loading = useAtomValue(loadingAtom);
  const errorMessage = useAtomValue(errorMessageAtom(condition.id));

  if (loading) {
    return (
      <LoaderWithLabel label={t('desktop.bulkRegenerate.dialog.content.loader.updateRecords')} />
    );
  }
  if (errorMessage) {
    return (
      <div className='grid'>
        <p>{t('desktop.bulkRegenerate.dialog.content.error.updateRecords')}</p>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className='grid place-items-center'>
      <div className='grid place-items-center gap-2'>
        <CheckAnimation />
        <p>{t('desktop.bulkRegenerate.dialog.content.success')}</p>
      </div>
    </div>
  );
};
