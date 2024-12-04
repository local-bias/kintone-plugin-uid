import { kintoneAPI } from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import {
  cybozuUserCodeAtom,
  cybozuUserGroupsAtom,
  cybozuUserOrganizationsAtom,
  pluginConditionsAtom,
} from '../public-state';

export const isDialogOpenAtom = atomFamily((_conditionId: string) => atom(false));
export const dialogStepAtom = atomFamily((_conditionId: string) => atom(0));

export const recordsAtom = atomFamily((_conditionId: string) => atom<kintoneAPI.RecordData[]>([]));

export const processedRecordsLengthAtom = atomFamily((_conditionId: string) => atom(0));

export const errorMessageAtom = atomFamily((_conditionId: string) => atom<string | null>(null));

export const isButtonShownAtom = atomFamily((conditionId: string) =>
  atom(async (get) => {
    const conditions = get(pluginConditionsAtom);
    const condition = conditions.find((c) => c.id === conditionId);
    if (!condition) {
      return false;
    }

    const userCode = get(cybozuUserCodeAtom);
    const userGroups = await get(cybozuUserGroupsAtom);
    const userOrganizations = await get(cybozuUserOrganizationsAtom);

    return condition.bulkRegenerateButtonShownUsers.some(({ type, code }) => {
      switch (type) {
        case 'user': {
          return code === userCode;
        }
        case 'group': {
          return userGroups.some((group) => group.code === code);
        }
        case 'organization': {
          return userOrganizations.some((organization) => organization.code === code);
        }
        default: {
          return false;
        }
      }
    });
  })
);
