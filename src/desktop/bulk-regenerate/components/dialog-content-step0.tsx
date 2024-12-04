import { loadingAtom } from '@/desktop/public-state';
import { LoaderWithLabel } from '@konomi-app/ui-react';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { errorMessageAtom, recordsAtom } from '../states';
import { FieldName } from './field-name';
import { useCondition } from './condition-context';

export const DialogContentStep0: FC = () => {
  const { condition } = useCondition();
  const loading = useAtomValue(loadingAtom);
  const records = useAtomValue(recordsAtom(condition.id));
  const errorMessage = useAtomValue(errorMessageAtom(condition.id));

  if (loading) {
    return <LoaderWithLabel label='対象レコードを取得しています' />;
  }
  if (errorMessage) {
    return (
      <div className='grid'>
        <p>レコード取得時にエラーが発生しました</p>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className='grid'>
      <p>
        {records.length.toLocaleString()}件のレコードを対象に、
        <FieldName />
        を一括で再生成します。
      </p>
      <p>よろしければ「実行」をクリックしてください。</p>
    </div>
  );
};
