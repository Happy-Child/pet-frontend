import React from 'react';
import { isUndefined } from 'lodash';
import { Provider } from './provider';

type Return<T> = [T, (val: T) => void];
export const useItem = <T>(key: string, initialValue: T): Return<T> => {
  const [value, setValue] = React.useState<T>(() => {
    const data = Provider.getItem<T>(key);
    return isUndefined(data) ? initialValue : data;
  });

  const handleSetValue = (newValue: T): void => {
    Provider.setItem(key, String(newValue));
    setValue(newValue);
  };

  return [value, handleSetValue];
};
