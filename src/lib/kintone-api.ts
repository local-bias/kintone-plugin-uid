import { kintoneAPI } from '@konomi-app/kintone-utilities';

export const flatLayout = (layout: kintoneAPI.Layout): kintoneAPI.LayoutField[] => {
  const results: kintoneAPI.LayoutField[] = [];
  for (const chunk of layout) {
    if (chunk.type === 'ROW') {
      results.push(...flatLayoutRow(chunk));
      continue;
    } else if (chunk.type === 'GROUP') {
      results.push(...flatLayout(chunk.layout));
    } else if (chunk.type === 'SUBTABLE') {
      results.push(...chunk.fields);
    }
  }
  return results;
};

export const flatLayoutRow = (row: kintoneAPI.layout.Row): kintoneAPI.LayoutField[] => {
  return row.fields.reduce<kintoneAPI.LayoutField[]>((acc, field) => [...acc, field], []);
};
