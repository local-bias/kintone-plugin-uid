import { useAtomValue } from 'jotai';
import { type FC } from 'react';
import { processedRecordsLengthAtom, recordsAtom } from '../states';
import { useCondition } from './condition-context';

const Component: FC = () => {
  const { condition } = useCondition();
  const records = useAtomValue(recordsAtom(condition.id));
  const processedRecords = useAtomValue(processedRecordsLengthAtom(condition.id));

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
