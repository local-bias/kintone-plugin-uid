import { GUEST_SPACE_ID } from '@/lib/global';
import { isUsagePluginConditionMet, restorePluginConfig } from '@/lib/plugin';
import {
  getAppId,
  getCybozuUserGroups,
  getCybozuUserOrganizations,
  getFormFields,
  kintoneAPI,
} from '@konomi-app/kintone-utilities';
import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';

export const pluginConfigAtom = atom(restorePluginConfig());
export const pluginConditionsAtom = focusAtom(pluginConfigAtom, (s) => s.prop('conditions'));
export const validPluginConditionsAtom = atom((get) =>
  get(pluginConditionsAtom).filter(isUsagePluginConditionMet)
);

export const loadingCountAtom = atom(0);
export const loadingAtom = atom((get) => get(loadingCountAtom) > 0);

export const currentAppIdAtom = atom(() => {
  const id = getAppId();
  if (!id) {
    throw new Error('アプリIDが取得できませんでした');
  }
  return id;
});

export const currentAppFieldsAtom = atom<Promise<kintoneAPI.FieldProperty[]>>(async (get) => {
  const app = get(currentAppIdAtom);
  const { properties } = await getFormFields({
    app,
    guestSpaceId: GUEST_SPACE_ID,
    debug: process.env.NODE_ENV === 'development',
  });

  const values = Object.values(properties);
  return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
});

export const loginUserAtom = atom(() => kintone.getLoginUser());

export const cybozuUserCodeAtom = atom<string>((get) => get(loginUserAtom).code ?? '');

export const cybozuUserGroupsAtom = atom<Promise<cybozu.api.Group[]>>(async (get) => {
  const code = get(cybozuUserCodeAtom);
  const { groups } = await getCybozuUserGroups(code);
  return groups;
});

export const cybozuUserOrganizationsAtom = atom<Promise<cybozu.api.Organization[]>>(async (get) => {
  const code = get(cybozuUserCodeAtom);
  const { organizations } = await getCybozuUserOrganizations(code);
  return organizations;
});
