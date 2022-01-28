import { useUpdateAtom } from 'jotai/utils';
import * as RequestBase from '../base';
import { GlobalState } from './factories';

type BaseParams<R, D> = Omit<RequestBase.Params<R, D>, 'setResponse' | 'setIsPending' | 'setIsFinally'>
export type Params<R, D> = BaseParams<R, D> & { state: GlobalState<D> }
export type Return<R, D> = RequestBase.Return<R, D>;

export const useRequest = <R, D>(params: Params<R, D>): Return<R, D> => {
  const setIsPending = useUpdateAtom(params.state.isPending);
  const setIsFinally = useUpdateAtom(params.state.isFinally);
  const setResponse = useUpdateAtom(params.state.response);

  return RequestBase.useRequest({
    ...params,
    setIsPending,
    setIsFinally,
    setResponse,
  });
};
