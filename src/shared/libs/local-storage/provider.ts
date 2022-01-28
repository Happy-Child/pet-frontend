import { isUndefined, isNull } from 'lodash';
import { SafeJSON } from '@/shared/libs/utils';

export class Provider {
  static getItem<T>(key: string): T | undefined {
    if (isUndefined(window.localStorage)) return undefined;

    const rawItem = window.localStorage.getItem(key);

    if (isNull(rawItem)) return undefined;

    return SafeJSON.parse<T>(rawItem);
  }

  static setItem(key: string, data: string): void {
    if (isUndefined(window.localStorage)) return;
    window.localStorage.setItem(key, data);
  }

  static removeItem(key: string): void {
    if (isUndefined(window.localStorage)) return;
    window.localStorage.removeItem(key);
  }
}
