import { Internal } from '@/shared/libs/api';
import * as Http from '@/shared/libs/http';
import { isUndefined } from 'lodash';

export const {
  useRequestHandler,
  useIsFinally,
  useResponse,
  useIsPending,
} = Http.hook.create<Internal.User>(Internal.me.send);

export const useIsAuthenticated = (): boolean | null => {
  const response = useResponse();
  return isUndefined(response) ? null : response.isRight();
};
