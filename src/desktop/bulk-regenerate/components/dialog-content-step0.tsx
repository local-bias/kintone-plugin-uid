import { loadingAtom } from '@/desktop/public-state';
import { t } from '@/lib/i18n';
import { LoaderWithLabel } from '@konomi-app/ui-react';
import { Alert, AlertTitle } from '@mui/material';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { errorMessageAtom, recordsAtom } from '../states';
import { useCondition } from './condition-context';
import { FieldName } from './field-name';

export const DialogContentStep0: FC = () => {
  const { condition } = useCondition();
  const loading = useAtomValue(loadingAtom);
  const records = useAtomValue(recordsAtom(condition.id));
  const errorMessage = useAtomValue(errorMessageAtom(condition.id));

  if (loading) {
    return <LoaderWithLabel label={t('desktop.bulkRegenerate.dialog.content.loader.getRecords')} />;
  }
  if (errorMessage) {
    return (
      <div className='grid'>
        <p>{t('desktop.bulkRegenerate.dialog.content.error.getRecords')}</p>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className='grid'>
      <Alert severity='warning' variant='outlined' sx={{ border: '0' }}>
        <AlertTitle>
          {t('desktop.bulkRegenerate.dialog.title')}: <FieldName />
        </AlertTitle>
        <p>
          {t('desktop.bulkRegenerate.dialog.content.confirm.text1')}
          <span style={{ color: 'orangered' }}>
            {t('desktop.bulkRegenerate.dialog.content.confirm.text2')}
          </span>
        </p>
        <p>{t('desktop.bulkRegenerate.dialog.content.confirm.text3')}</p>
        <p style={{ lineHeight: '28px' }}>
          {t('desktop.bulkRegenerate.dialog.content.confirm.field')}:{' '}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            <FieldName />
          </span>
        </p>
        <p style={{ lineHeight: '28px' }}>
          {t('desktop.bulkRegenerate.dialog.content.confirm.length')}:{' '}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {records.length.toLocaleString()}
            {t('desktop.bulkRegenerate.dialog.content.confirm.unit')}
          </span>
        </p>
      </Alert>
    </div>
  );
};
