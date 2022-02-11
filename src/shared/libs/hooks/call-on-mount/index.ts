import React from 'react';

export const useCallOnMount = (...callbacks: (() => Promise<unknown>)[]): void => {
  React.useEffect(() => {
    void (async () => {
      const promises = callbacks.map((fn) => fn());
      await Promise.all(promises);
    })();
  }, []);
};
