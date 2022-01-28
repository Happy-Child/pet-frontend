import { RequestGlobalHook } from '@/shared/libs/hooks';
import { internal as InternalApi } from '@/shared/libs/api';
import { isUndefined } from 'lodash';

const requestState = RequestGlobalHook.stateFactory<InternalApi.User>();

export const useRequest = (): RequestGlobalHook.Return<undefined, InternalApi.User> => (
  RequestGlobalHook.useRequest({
    state: requestState,
    request: InternalApi.me.callRequest,
  })
);

export const { useIsPending, useIsFinally, useResponse } = RequestGlobalHook.selectorsFactory(requestState);

export const useIsAuthenticated = (): boolean | null => {
  const response = useResponse();
  return isUndefined(response) ? null : response.isRight();
};
