import { loadingAtom } from '@/desktop/public-state';
import { CheckAnimation, LoaderWithLabel } from '@konomi-app/ui-react';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { errorMessageAtom, recordsAtom } from '../states';

export const DialogContentStep1: FC = () => {
  const loading = useAtomValue(loadingAtom);
  const records = useAtomValue(recordsAtom);
  const errorMessage = useAtomValue(errorMessageAtom);

  if (loading) {
    return <LoaderWithLabel label='レコードを更新しています' />;
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
    <div className='grid place-items-center'>
      <div className='grid place-items-center gap-2'>
        <CheckAnimation />
        <p>{records.length}件のレコードを更新しました。</p>
      </div>
    </div>
  );
};
