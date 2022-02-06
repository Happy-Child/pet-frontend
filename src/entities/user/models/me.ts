import { Internal } from '@/shared/libs/api';
import * as Http from '@/shared/libs/http';
import { isUndefined } from 'lodash';

const {
  useRequestHandler,
  useIsFinally,
  useResponse,
  useIsPending,
} = Http.hook.create<Internal.User>();

export { useIsFinally, useResponse, useIsPending };

export const useRequest = (): Http.hook.Return<Internal.User> => {
  const handleRequest = useRequestHandler({
    request: Internal.me.send,
  });

  return handleRequest;
};

export const useIsAuthenticated = (): boolean | null => {
  const response = useResponse();
  return isUndefined(response) ? null : response.isRight();
};
