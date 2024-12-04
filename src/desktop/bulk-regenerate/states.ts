import { kintoneAPI } from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const isDialogOpenAtom = atomFamily((conditionId: string) => atom(false));
export const dialogStepAtom = atomFamily((conditionId: string) => atom(0));

export const recordsAtom = atomFamily((conditionId: string) => atom<kintoneAPI.RecordData[]>([]));

export const processedRecordsLengthAtom = atomFamily((conditionId: string) => atom(0));

export const errorMessageAtom = atomFamily((conditionId: string) => atom<string | null>(null));
