import { RequestGlobalHook } from '@/shared/libs/hooks';
import { internal as InternalApi } from '@/shared/libs/api';

const requestState = RequestGlobalHook.stateFactory<InternalApi.User>();
const requestSelectors = RequestGlobalHook.selectorsFactory(requestState);

const useHandler = (): RequestGlobalHook.Return<undefined, InternalApi.User> => (
  RequestGlobalHook.useRequest({
    state: requestState,
    request: InternalApi.me.callRequest,
  })
);

export const request = {
  ...requestSelectors,
  useHandler,
};
