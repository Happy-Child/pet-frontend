import { PrimitiveAtom } from 'jotai';
import { Response } from '../core/types';

export interface State<D, F> {
  readonly isPending: boolean;
  readonly isFinally: boolean;
  readonly response: Response<D, F> | undefined;
}

export interface ReactiveState<D, F> {
  isPending: PrimitiveAtom<State<D, F>['isPending']>;
  isFinally: PrimitiveAtom<State<D, F>['isFinally']>;
  response: PrimitiveAtom<State<D, F>['response']>;
}
