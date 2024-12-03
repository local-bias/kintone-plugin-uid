import { kintoneAPI } from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';

export const isDialogOpenAtom = atom(false);
export const dialogStepAtom = atom(0);

export const recordsAtom = atom<kintoneAPI.RecordData[]>([]);

export const processedRecordsLengthAtom = atom(0);

export const errorMessageAtom = atom<string | null>(null);
