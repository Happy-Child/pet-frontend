import { left, right } from '@sweet-monads/either';
import { RawDoneResponse, RawFailResponse, Response } from '../types';
import { DEFAULT_FAIL_STATUS_CODE, DEFAULT_FAIL_ERRORS } from '../config';

export const prepareDoneResponse = <D>({ status, data }: RawDoneResponse<D>): Response<D> => (
  right({ statusCode: status, data })
);

export const prepareFailResponse = <D>({ response }: RawFailResponse): Response<D> => (
  left({
    statusCode: response?.status || DEFAULT_FAIL_STATUS_CODE,
    errors: response?.data?.errors || DEFAULT_FAIL_ERRORS,
  })
);
