import { manager } from '@/lib/event-manager';
import { isProd } from '@/lib/global';
import { store } from '@/lib/store';
import { getId } from '@/lib/utils';
import { validPluginConditionsAtom } from '../public-state';

manager.add(['app.record.create.show'], (event) => {
  const conditions = store.get(validPluginConditionsAtom);
  const record = event.record;

  for (const condition of conditions) {
    const field = record[condition.fieldCode];
    if (!field) {
      !isProd && console.warn(`Field ${condition.fieldCode} not found`);
      continue;
    }
    const id = getId({ condition, record });
    field.value = id;
  }

  return event;
});
