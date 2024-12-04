import { Button, IconButton, TextField } from '@mui/material';
import { useEffect, useState, type FC } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';
import { useAtomValue } from 'jotai';
import { selectedConditionAtom } from '@/config/states/plugin';
import { getId } from '@/lib/utils';
import { t } from '@/lib/i18n';

const Preview: FC = () => {
  const condition = useAtomValue(selectedConditionAtom);
  const [value, setValue] = useState('');
  const reroll = () => setValue(getId({ condition, record: {} }));

  useEffect(() => {
    setValue(getId({ condition, record: {} }));
  }, [condition]);

  return (
    <div className='flex items-center gap-2'>
      <TextField
        label={t('config.condition.preview.label')}
        value={value}
        variant='outlined'
        sx={{ width: '400px' }}
      />
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={reroll}
        startIcon={<CasinoIcon />}
      >
        {t('config.condition.preview.rerollButton.label')}
      </Button>
    </div>
  );
};

export default Preview;
