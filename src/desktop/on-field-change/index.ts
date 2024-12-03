import { store } from '@/lib/store';
import { validPluginConditionsAtom } from '../public-state';
import { manager } from '@/lib/event-manager';
import { getId } from '@/lib/utils';

const conditions = store
  .get(validPluginConditionsAtom)
  .filter((condition) => condition.mode === 'custom');

const monitoredFields = conditions.flatMap((condition) =>
  condition.customIDRules
    .filter((rule) => rule.type === 'field_value')
    .map((rule) => rule.fieldCode)
);

const events = monitoredFields.flatMap((fieldCode) => [
  `app.record.create.change.${fieldCode}`,
  `app.record.edit.change.${fieldCode}`,
]);

manager.addChangeEvents(events, (event) => {
  const record = event.record;

  for (const condition of conditions) {
    const field = record[condition.fieldCode];
    if (!field) {
      continue;
    }
    const id = getId({ condition, record });
    field.value = id;
  }

  return event;
});
