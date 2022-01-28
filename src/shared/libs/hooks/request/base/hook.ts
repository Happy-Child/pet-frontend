import { isUndefined } from 'lodash';
import { HttpDoneResponse, HttpFailResponse, HttpMethodResponse } from '@/shared/libs/http';

export type HandleRootRequest<P, D> = (data?: P) => Promise<HttpMethodResponse<D>>;

export interface Params<P, D> {
  readonly request: HandleRootRequest<P, D>,
  readonly setResponse: (res: HttpMethodResponse<D> | undefined) => void,
  readonly setIsPending: (val: boolean) => void,
  readonly setIsFinally: (val: boolean) => void,
  readonly onDone?: (done: HttpDoneResponse<D>) => void,
  readonly onFail?: (fail: HttpFailResponse) => void,
  readonly onPending?: (params: P | undefined) => void,
  readonly onFinally?: (res: HttpMethodResponse<D>) => void,
}

export type Return<P, D> = HandleRootRequest<P, D>;

export const useRequest = <P, D>({
  request,
  setResponse,
  setIsPending,
  setIsFinally,
  onDone,
  onFail,
  onPending,
  onFinally,
}: Params<P, D>): Return<P, D> => (
  (async (params) => {
    setIsFinally(false);

    setIsPending(true);
    if (!isUndefined(onPending)) onPending(params);

    const res = await request(params);
    setIsPending(false);

    const shouldCallDone = res.isRight() && !isUndefined(onDone);
    const shouldCallFail = res.isLeft() && !isUndefined(onFail);

    if (shouldCallDone) onDone(res.value);
    else if (shouldCallFail) onFail(res.value);

    setResponse(res);

    setIsFinally(true);
    if (!isUndefined(onFinally)) onFinally(res);

    return res;
  }) as HandleRootRequest<P, D>
);
