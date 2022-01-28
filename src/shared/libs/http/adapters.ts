import { AxiosResponse } from 'axios';
import { left, right } from '@sweet-monads/either';
import { AxiosFailResponse, HttpMethodResponse } from './types';
import { DEFAULT_FAIL_STATUS_CODE, DEFAULT_FAIL_ERRORS } from './config';

export const prepareHttpDoneResponse = <D>(
  responseDetails: AxiosResponse<D>,
): HttpMethodResponse<D> => (
  right({
    statusCode: responseDetails.status,
    data: responseDetails.data,
  })
);

export const prepareHttpFailResponse = <D>(
  errorDetails: AxiosFailResponse,
): HttpMethodResponse<D> => (
  left({
    statusCode: errorDetails.response?.status || DEFAULT_FAIL_STATUS_CODE,
    errors: errorDetails.response?.data?.errors || DEFAULT_FAIL_ERRORS,
  })
);
