import { getFormFields, kintoneAPI, getAppId, getFormLayout } from '@konomi-app/kintone-utilities';
import { GUEST_SPACE_ID } from '@/lib/global';
import { atom } from 'jotai';
import { flatLayout } from '@/lib/kintone-api';

const currentAppIdAtom = atom(() => {
  const id = getAppId();
  if (!id) {
    throw new Error('アプリIDが取得できませんでした');
  }
  return id;
});

export const appFieldsAtom = atom<Promise<kintoneAPI.FieldProperty[]>>(async (get) => {
  const app = get(currentAppIdAtom);
  const { properties } = await getFormFields({
    app,
    preview: true,
    guestSpaceId: GUEST_SPACE_ID,
    debug: process.env.NODE_ENV === 'development',
  });

  const values = Object.values(properties);
  return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
});

export const currentAppLayoutAtom = atom<Promise<kintoneAPI.Layout>>(async (get) => {
  const app = get(currentAppIdAtom);

  const { layout } = await getFormLayout({
    app,
    preview: true,
    guestSpaceId: GUEST_SPACE_ID,
    debug: process.env.NODE_ENV === 'development',
  });
  return layout;
});

export const flattenedCurrentAppLayoutFieldsAtom = atom<Promise<kintoneAPI.LayoutField[]>>(
  async (get) => {
    const layout = await get(currentAppLayoutAtom);
    return flatLayout(layout);
  }
);

export const currentAppSpacesAtom = atom<Promise<kintoneAPI.layout.Spacer[]>>(async (get) => {
  const fields = await get(flattenedCurrentAppLayoutFieldsAtom);
  const spaceFields = fields.filter(
    (field) => field.type === 'SPACER'
  ) as kintoneAPI.layout.Spacer[];
  const ids = spaceFields.filter((space) => space.elementId);
  return ids;
});
