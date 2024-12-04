import {
  getCybozuGroups,
  getCybozuOrganizations,
  getCybozuUsers,
} from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';

export const cybozuUsersAtom = atom<Promise<cybozu.api.User[]>>(async () => {
  const { users } = await getCybozuUsers();
  return users;
});

export const cybozuGroupsAtom = atom<Promise<cybozu.api.Group[]>>(async () => {
  const { groups } = await getCybozuGroups();
  return groups;
});

export const cybozuOrganizationsAtom = atom<Promise<cybozu.api.Organization[]>>(async () => {
  const { organizations } = await getCybozuOrganizations();
  return organizations;
});
