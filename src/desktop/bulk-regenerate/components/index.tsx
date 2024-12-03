import { PluginCondition } from '@/lib/plugin';
import { store } from '@/lib/store';
import { cn } from '@/lib/utils';
import { css } from '@emotion/css';
import { Provider } from 'jotai';
import { type FC } from 'react';
import { useOpenDialog } from '../hooks';
import { ConditionProvider } from './condition-context';
import Dialog from './dialog';
import { FieldName } from './field-name';

type Props = { condition: PluginCondition };

const Component: FC = () => {
  const openDialog = useOpenDialog();

  return (
    <>
      <button
        onClick={openDialog}
        className={cn(
          '🐸',
          css`
            display: inline-block;
            box-sizing: border-box;
            border: 1px solid #e3e7e8;
            background-color: #f7f9fa;
            height: 48px;
            line-height: 48px;
            padding: 0 16px;
            font-size: 14px;
            color: #374151;
            transition: all 250ms ease;
            &:hover {
              background-color: #edf2f7;
              color: #3498db;
            }
          `
        )}
      >
        <FieldName />
        を再生成
      </button>
      <Dialog />
    </>
  );
};

const App: FC<Props> = (props) => {
  return (
    <Provider store={store}>
      <ConditionProvider {...props}>
        <Component />
      </ConditionProvider>
    </Provider>
  );
};

export default App;
