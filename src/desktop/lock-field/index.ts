import { manager } from '@/lib/event-manager';
import { store } from '@/lib/store';
import { validPluginConditionsAtom } from '../public-state';

manager.add(
  ['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'],
  (event) => {
    const conditions = store
      .get(validPluginConditionsAtom)
      .filter((condition) => condition.isFieldDisabled);

    for (const condition of conditions) {
      const field = event.record[condition.fieldCode];
      if (!field) {
        continue;
      }
      // @ts-expect-error `disabled` is not defined in `Field` type
      field.disabled = true;
    }

    return event;
  }
);
