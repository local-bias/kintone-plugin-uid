import { type ClassValue, clsx } from 'clsx';
import { nanoid } from 'nanoid';
import { twMerge } from 'tailwind-merge';
import { v4 as uuid } from 'uuid';
import { PluginCondition } from './plugin';
import { getFieldValueAsString, kintoneAPI } from '@konomi-app/kintone-utilities';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomValue = () => Math.random().toString(36).slice(2);

export const getId = (params: { condition: PluginCondition; record: kintoneAPI.RecordData }) => {
  const { condition, record } = params;
  switch (condition.mode) {
    case 'nanoid': {
      return nanoid();
    }
    case 'uuid': {
      return uuid();
    }
    case 'random': {
      return getRandomValue();
    }
    case 'custom': {
      let id = '';
      for (const rule of condition.customIDRules) {
        id += rule.prefix;

        if (rule.type === 'nanoid') {
          id += nanoid();
        } else if (rule.type === 'uuid') {
          id += uuid();
        } else if (rule.type === 'random') {
          id += getRandomValue();
        } else if (rule.type === 'field_value') {
          const field = record[rule.fieldCode];
          id += field ? getFieldValueAsString(field) : '';
        } else if (rule.type === 'constant') {
          id += rule.value;
        }
      }
      return id;
    }
    default: {
      throw new Error(`Unknown mode: ${condition.mode}`);
    }
  }
};
