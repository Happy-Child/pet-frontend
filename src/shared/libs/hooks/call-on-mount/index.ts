import React from 'react';

export const useCallOnMount = (cb: () => Promise<unknown>): void => {
  React.useEffect(() => {
    void (async () => { await cb(); })();
  });
};
