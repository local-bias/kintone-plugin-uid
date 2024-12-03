import { loadingAtom } from '@/desktop/public-state';
import { LoaderWithLabel } from '@konomi-app/ui-react';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { recordsAtom } from '../states';
import { FieldName } from './field-name';

export const DialogContentStep0: FC = () => {
  const loading = useAtomValue(loadingAtom);
  const records = useAtomValue(recordsAtom);

  if (loading) {
    return <LoaderWithLabel label='対象レコードを取得しています' />;
  }

  return (
    <div className='grid '>
      <p>
        {records.length.toLocaleString()}件のレコードを対象に、
        <FieldName />
        を一括で再生成します。
      </p>
      <p>よろしければ「実行」をクリックしてください。</p>
    </div>
  );
};
