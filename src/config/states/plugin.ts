import {
  PluginCommonConfig,
  PluginCondition,
  PluginConfig,
  restorePluginConfig,
} from '@/lib/plugin';
import { produce } from 'immer';
import { atom, PrimitiveAtom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { atomWithDefault } from 'jotai/utils';
import { SetStateAction } from 'react';

export const pluginConfigAtom = atom<PluginConfig>(restorePluginConfig());
export const loadingAtom = atom(false);
// export const pluginConditionsAtom = focusAtom(pluginConfigAtom, (s) => s.prop('conditions'));
export const pluginConditionsAtom = atom(
  (get) => get(pluginConfigAtom).conditions,
  (_, set, newValue: SetStateAction<PluginCondition[]>) => {
    set(pluginConfigAtom, (current) =>
      produce(current, (draft) => {
        draft.conditions = typeof newValue === 'function' ? newValue(draft.conditions) : newValue;
      })
    );
  }
);
export const conditionsLengthAtom = atom((get) => get(pluginConditionsAtom).length);
// export const pluginCommonConfigAtom = focusAtom(pluginConfigAtom, (s) => s.prop('common'));
export const pluginCommonConfigAtom = atom(
  (get) => get(pluginConfigAtom).common,
  (_, set, newValue: SetStateAction<PluginCommonConfig>) => {
    set(pluginConfigAtom, (current) =>
      produce(current, (draft) => {
        draft.common = typeof newValue === 'function' ? newValue(draft.common) : newValue;
      })
    );
  }
);
export const selectedConditionIdAtom = atomWithDefault<string | null>(
  (get) => get(pluginConditionsAtom)[0]?.id ?? null
);
export const commonSettingsShownAtom = atom((get) => get(selectedConditionIdAtom) === null);
export const selectedConditionAtom = atom(
  (get) => {
    const conditions = get(pluginConditionsAtom);
    const selectedConditionId = get(selectedConditionIdAtom);
    return conditions.find((condition) => condition.id === selectedConditionId) ?? conditions[0]!;
  },
  (get, set, newValue: SetStateAction<PluginCondition>) => {
    const selectedConditionId = get(selectedConditionIdAtom);
    const conditions = get(pluginConditionsAtom);
    const index = conditions.findIndex((condition) => condition.id === selectedConditionId);
    if (index === -1) {
      return;
    }
    set(pluginConfigAtom, (current) =>
      produce(current, (draft) => {
        draft.conditions[index] =
          typeof newValue === 'function' ? newValue(draft.conditions[index]!) : newValue;
      })
    );
  }
);

export const getCommonPropertyAtom = <T extends keyof PluginCommonConfig>(property: T) =>
  focusAtom(pluginCommonConfigAtom, (s) => s.prop(property)) as PrimitiveAtom<
    PluginCommonConfig[T]
  >;

// export const getConditionPropertyAtom = <T extends keyof PluginCondition>(property: T) =>
//   focusAtom(selectedConditionAtom, (s) => s.prop(property)) as PrimitiveAtom<PluginCondition[T]>;
export const getConditionPropertyAtom = <T extends keyof PluginCondition>(property: T) =>
  atom(
    (get) => {
      return get(selectedConditionAtom)[property];
    },
    (_, set, newValue: SetStateAction<PluginCondition[T]>) => {
      set(selectedConditionAtom, (condition) =>
        produce(condition, (draft) => {
          draft[property] = typeof newValue === 'function' ? newValue(draft[property]) : newValue;
        })
      );
    }
  );

export const modeAtom = getConditionPropertyAtom('mode');
export const isIDRegenerateButtonShownAtom = getConditionPropertyAtom('isIDRegenerateButtonShown');
export const isFieldDisabledAtom = getConditionPropertyAtom('isFieldDisabled');
export const idRegenerateButtonLabelAtom = getConditionPropertyAtom('idRegenerateButtonLabel');
export const idRegenerateButtonShownEventsAtom = getConditionPropertyAtom(
  'idRegenerateButtonShownEvents'
);
export const isBulkRegenerateButtonShownAtom = getConditionPropertyAtom(
  'isBulkRegenerateButtonShown'
);
export const isBulkRegenerateButtonLimitedAtom = getConditionPropertyAtom(
  'isBulkRegenerateButtonLimited'
);
