import { GUEST_SPACE_ID, isProd } from '@/lib/global';
import { PluginCondition } from '@/lib/plugin';
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
import {
  dialogStepAtom,
  isDialogOpenAtom,
  processedRecordsLengthAtom,
  recordsAtom,
} from './states';
import { useCondition } from './components/condition-context';

export const useBulkRegenerate = (condition: PluginCondition) => {
  return useAtomCallback(
    useCallback(
      async (get, set) => {
        try {
          set(loadingCountAtom, (c) => c + 1);
          const records = get(recordsAtom);
          const filtered = records.filter(
            (record) => !!record.$id?.value && !!record[condition.fieldCode]?.value
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
          });
        } finally {
          set(loadingCountAtom, (c) => c - 1);
        }
      },
      [condition]
    )
  );
};

export const useOpenDialog = () => {
  const { condition } = useCondition();

  return useAtomCallback(
    useCallback(
      async (get, set) => {
        try {
          set(dialogStepAtom, 0);
          set(loadingCountAtom, (c) => c + 1);
          set(isDialogOpenAtom, true);

          const query = getQueryCondition() ?? '';

          const fields = ['$id', condition.fieldCode];

          const records = await getAllRecords({
            app: get(currentAppIdAtom),
            query,
            fields,
            guestSpaceId: GUEST_SPACE_ID,
            debug: !isProd,
          });
          set(recordsAtom, records);
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

          const step = get(dialogStepAtom);

          switch (step) {
            case 0: {
              const records = get(recordsAtom);
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
                  set(processedRecordsLengthAtom, done);
                },
              });
              break;
            }
            case 1: {
              set(isDialogOpenAtom, false);
              break;
            }
          }
          set(dialogStepAtom, (s) => s + 1);
        } finally {
          set(loadingCountAtom, (c) => c - 1);
        }
      },
      [condition]
    )
  );
};
