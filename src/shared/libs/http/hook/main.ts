import { useCallback } from 'react';
import { isUndefined } from 'lodash';
import { useUpdateAtom } from 'jotai/utils';
import {
  Response, FailResponse, DoneResponse, ErrorDefault,
} from '../core/types';
import { ReactiveState } from './types';

export type HandleRootRequest<D, P = undefined, F = ErrorDefault> = (data?: P) => Promise<Response<D, F>>;

export interface Params<D, P = undefined, F = ErrorDefault> {
  readonly onDone?: (done: DoneResponse<D>) => void,
  readonly onFail?: (fail: FailResponse<F>) => void,
  readonly onPending?: (params: P | undefined) => void,
  readonly onFinally?: (res: Response<D, F>) => void,
}

type FullParams<D, P = undefined, F = ErrorDefault> = Params<D, P, F> & {
  readonly state: ReactiveState<D, F>,
  readonly request: HandleRootRequest<D, P, F>,
}

export type Return<D, P = undefined, F = ErrorDefault> = HandleRootRequest<D, P, F>;

export const useRequest = <D, P = undefined, F = ErrorDefault>({
  state,
  request,
  onDone,
  onFail,
  onPending,
  onFinally,
}: FullParams<D, P, F>): Return<D, P, F> => {
  const setIsPending = useUpdateAtom(state.isPending);
  const setIsFinally = useUpdateAtom(state.isFinally);
  const setResponse = useUpdateAtom(state.response);

  const handleRequest: HandleRootRequest<D, P, F> = useCallback(async (params) => {
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
  }, [request, onDone, onFinally, onFail, onPending, setIsPending, setIsFinally, setResponse]);

  return handleRequest;
};
