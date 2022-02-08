import { atom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { ErrorDefault } from '../core/types';
import { State, ReactiveState } from './types';
import {
  Return, Params, HandleRootRequest, useRequest,
} from './main';

const createState = <D, F>(): ReactiveState<D, F> => ({
  isPending: atom<State<D, F>['isPending']>(false),
  isFinally: atom<State<D, F>['isFinally']>(false),
  response: atom<State<D, F>['response']>(undefined),
});

interface CreateReturn<D, P = undefined, F = ErrorDefault> {
  readonly useRequestHandler: (params?: Params<D, P, F>) => Return<D, P, F>,
  readonly useIsPending: () => State<D, F>['isPending'],
  readonly useIsFinally: () => State<D, F>['isFinally'],
  readonly useResponse: () => State<D, F>['response'],
}
export const create = <D, P = undefined, F = ErrorDefault>(
  request: HandleRootRequest<D, P, F>,
): CreateReturn<D, P, F> => {
  const state = createState<D, F>();
  return {
    useRequestHandler: (params?: Params<D, P, F>) => (
      useRequest({ ...params, request, state })
    ),
    useIsPending: (): State<D, F>['isPending'] => useAtomValue(state.isPending),
    useIsFinally: (): State<D, F>['isFinally'] => useAtomValue(state.isFinally),
    useResponse: (): State<D, F>['response'] => useAtomValue(state.response),
  };
};
