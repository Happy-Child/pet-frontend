import { Either } from '@sweet-monads/either';
import { GeneralError } from '@/shared/libs/types';
import { AxiosError } from 'axios';

export type HttpReqDefault = Record<string, unknown> | undefined;

export type HttpDoneResponse<T> = {
  readonly statusCode: number;
  readonly data: T;
}

export type HttpFailResponse = {
  readonly statusCode: number;
  readonly errors: GeneralError[];
};

export type HttpMethodResponse<D> = Either<HttpFailResponse, HttpDoneResponse<D>>;

export type AxiosFailResponse = AxiosError<{ readonly errors: GeneralError[] }>;
