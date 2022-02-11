import { ChangeEvent } from './types';

export const replaceEventValue = (e: ChangeEvent, value: unknown): ChangeEvent => ({
  ...e,
  target: { ...e.target, value },
} as ChangeEvent);
