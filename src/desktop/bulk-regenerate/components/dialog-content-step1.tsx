import { loadingAtom } from '@/desktop/public-state';
import { CheckAnimation, LoaderWithLabel } from '@konomi-app/ui-react';
import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { recordsAtom } from '../states';

export const DialogContentStep1: FC = () => {
  const loading = useAtomValue(loadingAtom);
  const records = useAtomValue(recordsAtom);

  if (loading) {
    return <LoaderWithLabel label='レコードを更新しています' />;
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
