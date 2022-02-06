import { AxiosResponse } from 'axios';
import { left, right } from '@sweet-monads/either';
import { RawFailResponse, Response } from '../types';
import { DEFAULT_FAIL_STATUS_CODE, DEFAULT_FAIL_ERRORS } from '../config';

export const prepareDoneResponse = <D>(data: AxiosResponse<D>): Response<D> => (
  right({ statusCode: data.status, data: data.data })
);

export const prepareFailResponse = <D>(data: RawFailResponse): Response<D> => (
  left({
    statusCode: data.response?.status || DEFAULT_FAIL_STATUS_CODE,
    errors: data.response?.data?.errors || DEFAULT_FAIL_ERRORS,
  })
);
