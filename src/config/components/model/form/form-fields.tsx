import { JotaiFieldSelect } from '@/components/jotai';
import { getConditionPropertyAtom } from '@/config/states/plugin';
import { t } from '@/lib/i18n';
import { Skeleton } from '@mui/material';
import { useAtom } from 'jotai';
import { FC, memo, Suspense } from 'react';
import { currentAppStringFieldsAtom } from '../../../states/kintone';

const conditionPropertyAtom = getConditionPropertyAtom('fieldCode');

const Component: FC = () => {
  const [fieldCode, setFieldCode] = useAtom(conditionPropertyAtom);

  const onChange = (code: string) => {
    setFieldCode(code);
  };

  return (
    <JotaiFieldSelect
      fieldPropertiesAtom={currentAppStringFieldsAtom}
      onChange={(code) => onChange(code)}
      fieldCode={fieldCode}
      label={t('config.condition.fieldCode.label')}
      placeholder={t('config.condition.fieldCode.placeholder')}
    />
  );
};

const Placeholder: FC = () => (
  <div className='flex flex-col gap-4'>
    {new Array(3).fill('').map((_, i) => (
      <div key={i} className='flex items-center gap-2'>
        <Skeleton variant='rounded' width={400} height={56} />
        <Skeleton variant='circular' width={24} height={24} />
        <Skeleton variant='circular' width={24} height={24} />
      </div>
    ))}
  </div>
);

const Container: FC = () => (
  <Suspense fallback={<Placeholder />}>
    <Component />
  </Suspense>
);

export default memo(Container);
