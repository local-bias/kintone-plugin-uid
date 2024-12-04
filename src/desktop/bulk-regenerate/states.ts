import { kintoneAPI } from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const isDialogOpenAtom = atomFamily((_conditionId: string) => atom(false));
export const dialogStepAtom = atomFamily((_conditionId: string) => atom(0));

export const recordsAtom = atomFamily((_conditionId: string) => atom<kintoneAPI.RecordData[]>([]));

export const processedRecordsLengthAtom = atomFamily((_conditionId: string) => atom(0));

export const errorMessageAtom = atomFamily((_conditionId: string) => atom<string | null>(null));
