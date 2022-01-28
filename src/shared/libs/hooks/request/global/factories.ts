import {
  atom, PrimitiveAtom,
} from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { State } from '../types';

export interface GlobalState<D> {
  isPending: PrimitiveAtom<State<D>['isPending']>;
  isFinally: PrimitiveAtom<State<D>['isFinally']>;
  response: PrimitiveAtom<State<D>['response']>;
}
export const stateFactory = <D>(): GlobalState<D> => ({
  isPending: atom<State<D>['isPending']>(false),
  isFinally: atom<State<D>['isFinally']>(false),
  response: atom<State<D>['response']>(undefined),
});

interface SelectorsFactoryReturn<D> {
  readonly useIsPending: () => State<D>['isPending']
  readonly useIsFinally: () => State<D>['isFinally']
  readonly useResponse: () => State<D>['response']
}
export const selectorsFactory = <D>(state: GlobalState<D>): SelectorsFactoryReturn<D> => ({
  useIsPending: (): State<D>['isPending'] => useAtomValue(state.isPending),
  useIsFinally: (): State<D>['isFinally'] => useAtomValue(state.isFinally),
  useResponse: (): State<D>['response'] => useAtomValue(state.response),
});
