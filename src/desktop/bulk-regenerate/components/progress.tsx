import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { processedRecordsLengthAtom, recordsAtom } from '../states';

const Component: FC = () => {
  const records = useAtomValue(recordsAtom);
  const processedRecords = useAtomValue(processedRecordsLengthAtom);

  return (
    <div
      className='absolute bottom-0 left-0 h-0.5 bg-primary transition-all'
      style={{
        width: `${(processedRecords / records.length) * 100}%`,
      }}
    ></div>
  );
};

export default Component;
