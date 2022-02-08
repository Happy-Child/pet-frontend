import { useEffect, useRef } from 'react';
import { UseFormWatch, WatchObserver } from 'react-hook-form';
import { DefaultFormValues } from '../types';

export const useWatchFormByFlag = <T extends DefaultFormValues>(
  formWatch: UseFormWatch<T>,
  callback: WatchObserver<T>,
  startWatched: boolean,
): void => {
  const subscription = useRef<ReturnType<UseFormWatch<T>> | null>(null);

  const handleUnsubscribe = (): void => {
    if (subscription.current) {
      subscription.current.unsubscribe();
      subscription.current = null;
    }
  };

  useEffect(() => {
    handleUnsubscribe();

    if (startWatched) {
      subscription.current = formWatch(callback);
    }

    return (): void => handleUnsubscribe();
  }, [startWatched, callback, formWatch]);
};
