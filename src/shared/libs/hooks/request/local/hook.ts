import React from 'react';
import * as RequestBase from '../base';
import { State } from '../types';

export type Params<P, D> = Omit<RequestBase.Params<P, D>, 'setResponse' | 'setIsPending' | 'setIsFinally'>
export interface Return<P, D> extends State<D> {
  readonly sendRequest: RequestBase.Return<P, D>,
}

export const useRequest = <P, D>(params: Params<P, D>): Return<P, D> => {
  const [isPending, setIsPending] = React.useState<Return<P, D>['isPending']>(false);
  const [isFinally, setIsFinally] = React.useState<Return<P, D>['isFinally']>(false);
  const [response, setResponse] = React.useState<Return<P, D>['response']>(undefined);

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
