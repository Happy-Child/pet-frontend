import { isUndefined } from 'lodash';
import { HttpDoneResponse, HttpFailResponse, HttpMethodResponse } from '@/shared/libs/http';

export type HandleRootRequest<R, D> = (data?: R) => Promise<HttpMethodResponse<D>>;

export interface Params<R, D> {
  readonly request: HandleRootRequest<R, D>,
  readonly setResponse: (res: HttpMethodResponse<D> | undefined) => void,
  readonly setIsPending: (val: boolean) => void,
  readonly setIsFinally: (val: boolean) => void,
  readonly onDone?: (done: HttpDoneResponse<D>) => void,
  readonly onFail?: (fail: HttpFailResponse) => void,
  readonly onPending?: (req: R | undefined) => void,
  readonly onFinally?: (res: HttpMethodResponse<D>) => void,
}

export type Return<R, D> = HandleRootRequest<R, D>;

export const useRequest = <R, D>({
  request,
  setResponse,
  setIsPending,
  setIsFinally,
  onDone,
  onFail,
  onPending,
  onFinally,
}: Params<R, D>): Return<R, D> => (
  (async (req) => {
    setIsFinally(false);

    setIsPending(true);
    if (!isUndefined(onPending)) onPending(req);

    const res = await request(req);
    setIsPending(false);

    const shouldCallDone = res.isRight() && !isUndefined(onDone);
    const shouldCallFail = res.isLeft() && !isUndefined(onFail);

    if (shouldCallDone) onDone(res.value);
    else if (shouldCallFail) onFail(res.value);

    setResponse(res);

    setIsFinally(true);
    if (!isUndefined(onFinally)) onFinally(res);

    return res;
  }) as HandleRootRequest<R, D>
);
