import { AxiosResponse } from 'axios';
import { left, right } from '@sweet-monads/either';
import { AxiosFailResponse, HttpMethodResponse } from './types';

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
    statusCode: errorDetails.response?.status || null,
    errors: errorDetails.response?.data?.errors || null,
  })
);
