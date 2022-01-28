import { useUpdateAtom } from 'jotai/utils';
import * as RequestBase from '../base';
import { GlobalState } from './factories';

type BaseParams<P, D> = Omit<RequestBase.Params<P, D>, 'setResponse' | 'setIsPending' | 'setIsFinally'>
export type Params<P, D> = BaseParams<P, D> & { state: GlobalState<D> }
export type Return<P, D> = RequestBase.Return<P, D>;

export const useRequest = <P, D>(params: Params<P, D>): Return<P, D> => {
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
