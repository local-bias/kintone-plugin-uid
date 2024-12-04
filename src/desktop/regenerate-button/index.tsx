import { manager } from '@/lib/event-manager';
import { isProd } from '@/lib/global';
import { store } from '@/lib/store';
import { getId } from '@/lib/utils';
import {
  getCurrentRecord,
  getSpaceElement,
  kintoneAPI,
  setCurrentRecord,
} from '@konomi-app/kintone-utilities';
import { ComponentManager } from '@konomi-app/kintone-utilities-react';
import { Button } from '@mui/material';
import { validPluginConditionsAtom } from '../public-state';
import { css } from '@emotion/css';
import { ThemeProvider } from '@/components/theme-provider';

const conditions = store
  .get(validPluginConditionsAtom)
  .filter((condition) => condition.isIDRegenerateButtonShown);

const componentManager = ComponentManager.getInstance();

for (const condition of conditions) {
  const events: kintoneAPI.js.EventType[] = [
    ...(condition.idRegenerateButtonShownEvents.create
      ? (['app.record.create.show'] as kintoneAPI.js.EventType[])
      : []),
    ...(condition.idRegenerateButtonShownEvents.update
      ? (['app.record.edit.show'] as kintoneAPI.js.EventType[])
      : []),
  ];

  manager.add(events, async (event) => {
    const spaceElement = getSpaceElement(condition.idRegenerateButtonSpaceId);
    if (!spaceElement) {
      !isProd && console.warn(`Space ${condition.idRegenerateButtonSpaceId} not found`);
      return event;
    }
    spaceElement.classList.add(css`
      display: flex;
      width: 100%;
      height: ${spaceElement.parentElement?.clientHeight}px;
      justify-content: flex-start;
      align-items: flex-end;
    `);

    const onClick = () => {
      const { record } = getCurrentRecord();
      const field = record[condition.fieldCode];
      if (!field) {
        !isProd && console.warn(`Field ${condition.fieldCode} not found`);
        return;
      }
      const id = getId({ condition, record });
      field.value = id;
      setCurrentRecord({ record });
    };

    componentManager.renderComponent({
      id: `${condition.id}-regenerate-button`,
      component: (
        <ThemeProvider>
          <Button onClick={onClick} variant='contained' color='primary'>
            {condition.idRegenerateButtonLabel}
          </Button>
        </ThemeProvider>
      ),
      parentElement: spaceElement,
      onRootElementReady: (element) => {
        element.classList.add(css``);
      },
    });

    return event;
  });
}
