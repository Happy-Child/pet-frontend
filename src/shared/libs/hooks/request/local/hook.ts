import React from 'react';
import * as RequestBase from '../base';
import { State } from '../types';

export type Params<R, D> = Omit<RequestBase.Params<R, D>, 'setResponse' | 'setIsPending' | 'setIsFinally'>
export interface Return<R, D> extends State<D> {
  readonly sendRequest: RequestBase.Return<R, D>,
}

export const useRequest = <R, D>(params: Params<R, D>): Return<R, D> => {
  const [isPending, setIsPending] = React.useState<Return<R, D>['isPending']>(false);
  const [isFinally, setIsFinally] = React.useState<Return<R, D>['isFinally']>(false);
  const [response, setResponse] = React.useState<Return<R, D>['response']>(undefined);

  const sendRequest = RequestBase.useRequest({
    request: params.request,
    setIsPending,
    setIsFinally,
    setResponse,
  });

  return {
    sendRequest,
    isPending,
    isFinally,
    response,
  };
};
