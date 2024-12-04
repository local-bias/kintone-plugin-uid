import { DialogHeader } from '@/components/ui/dialog';
import { loadingAtom } from '@/desktop/public-state';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { type FC } from 'react';
import { useOnNext } from '../hooks';
import { dialogStepAtom, isDialogOpenAtom } from '../states';
import { DialogContentStep0 } from './dialog-content-step0';
import { DialogContentStep1 } from './dialog-content-step1';
import { FieldName } from './field-name';
import { useCondition } from './condition-context';

const Component: FC = () => {
  const { condition } = useCondition();
  const loading = useAtomValue(loadingAtom);
  const [step, setStep] = useAtom(dialogStepAtom(condition.id));
  const [isDialogOpen, setIsDialogOpen] = useAtom(isDialogOpenAtom(condition.id));
  const onNext = useOnNext();

  const canClose = !loading;

  const onPrevious = () => {
    if (step === 0) {
      setIsDialogOpen(false);
    } else {
      setStep((s) => s - 1);
    }
  };

  const onClose = () => {
    if (canClose) {
      setIsDialogOpen(false);
      setStep(0);
    }
  };

  return (
    <Dialog open={isDialogOpen} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogHeader>
        <DialogTitle>
          一括再生成: <FieldName />
        </DialogTitle>
      </DialogHeader>
      <DialogContent
        className='🐸'
        sx={{ minHeight: '200px', display: 'grid', alignContent: 'center' }}
      >
        {step === 0 && <DialogContentStep0 />}
        {step === 1 && <DialogContentStep1 />}
      </DialogContent>
      <DialogActions>
        <Button color='inherit' onClick={onPrevious} disabled={loading || !canClose}>
          {step === 0 ? 'キャンセル' : '戻る'}
        </Button>
        <Button color='primary' onClick={onNext} disabled={loading}>
          {step === 1 ? '閉じる' : '実行'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Component;
