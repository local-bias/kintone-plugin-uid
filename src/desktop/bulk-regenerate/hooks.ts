import { GUEST_SPACE_ID, isProd } from '@/lib/global';
import { getId } from '@/lib/utils';
import {
  getAllRecords,
  getQueryCondition,
  updateAllRecords,
  UpdateAllRecordsParams,
} from '@konomi-app/kintone-utilities';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { currentAppIdAtom, loadingCountAtom } from '../public-state';
import { useCondition } from './components/condition-context';
import {
  dialogStepAtom,
  errorMessageAtom,
  isDialogOpenAtom,
  processedRecordsLengthAtom,
  recordsAtom,
} from './states';

export const useOpenDialog = () => {
  const { condition } = useCondition();

  return useAtomCallback(
    useCallback(
      async (get, set) => {
        try {
          set(errorMessageAtom(condition.id), null);
          set(dialogStepAtom(condition.id), 0);
          set(loadingCountAtom, (c) => c + 1);
          set(isDialogOpenAtom(condition.id), true);

          const query = getQueryCondition() ?? '';

          const fields = ['$id', condition.fieldCode];

          const records = await getAllRecords({
            app: get(currentAppIdAtom),
            query,
            fields,
            guestSpaceId: GUEST_SPACE_ID,
            debug: !isProd,
          });
          set(recordsAtom(condition.id), records);
        } catch (error) {
          if (error instanceof Error) {
            set(errorMessageAtom(condition.id), error.message);
          } else {
            set(errorMessageAtom(condition.id), '不明なエラーが発生しました');
          }
        } finally {
          set(loadingCountAtom, (c) => c - 1);
        }
      },
      [condition]
    )
  );
};

export const useOnNext = () => {
  const { condition } = useCondition();

  return useAtomCallback(
    useCallback(
      async (get, set) => {
        try {
          set(loadingCountAtom, (c) => c + 1);

          const step = get(dialogStepAtom(condition.id));

          switch (step) {
            case 0: {
              set(dialogStepAtom(condition.id), (s) => s + 1);
              const records = get(recordsAtom(condition.id));
              const filtered = records.filter(
                (record) => !!record.$id?.value && record[condition.fieldCode]?.value !== undefined
              );

              const newRecords: UpdateAllRecordsParams['records'] = filtered.map((record) => {
                return {
                  id: record.$id!.value as string,
                  record: { [condition.fieldCode]: { value: getId({ condition, record }) } },
                };
              });

              await updateAllRecords({
                app: get(currentAppIdAtom),
                records: newRecords,
                guestSpaceId: GUEST_SPACE_ID,
                debug: !isProd,
                onProgress: ({ done }) => {
                  set(processedRecordsLengthAtom(condition.id), done);
                },
              });
              break;
            }
            case 1: {
              set(isDialogOpenAtom(condition.id), false);
              break;
            }
          }
        } finally {
          set(loadingCountAtom, (c) => c - 1);
        }
      },
      [condition]
    )
  );
};
