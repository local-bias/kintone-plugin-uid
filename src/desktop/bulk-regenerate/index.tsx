import { manager } from '@/lib/event-manager';
import { isProd } from '@/lib/global';
import { store } from '@/lib/store';
import { getHeaderSpace } from '@konomi-app/kintone-utilities';
import { ComponentManager } from '@konomi-app/kintone-utilities-react';
import { validPluginConditionsAtom } from '../public-state';
import App from './components';

manager.add(['app.record.index.show'], async (event) => {
  const conditions = store
    .get(validPluginConditionsAtom)
    .filter((condition) => condition.isBulkRegenerateButtonShown);

  const componentManager = ComponentManager.getInstance();

  const headerElement = getHeaderSpace(event.type);
  if (!headerElement) {
    !isProd && console.error('Header space not found');
    return event;
  }

  for (const condition of conditions) {
    componentManager.renderComponent({
      id: condition.id,
      component: <App condition={condition} />,
      parentElement: headerElement,
    });
  }

  return event;
});
