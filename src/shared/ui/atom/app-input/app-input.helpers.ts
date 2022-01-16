import { AppInputChangeEvent } from './app-input.types';

export const getEventWithReplacedValue = (e: AppInputChangeEvent, value: unknown): AppInputChangeEvent => ({
  ...e,
  target: { ...e.target, value },
} as AppInputChangeEvent);
