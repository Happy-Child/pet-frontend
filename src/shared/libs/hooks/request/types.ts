import { HttpMethodResponse } from '@/shared/libs/http';

export interface State<D> {
  readonly isPending: boolean;
  readonly isFinally: boolean;
  readonly response: HttpMethodResponse<D> | undefined;
}
