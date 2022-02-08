import { Either } from '@sweet-monads/either';
import { GeneralError } from '@/shared/libs/types';
import { AxiosError, AxiosResponse } from 'axios';

export type ReqParamsDefault = Record<string, unknown> | undefined;

export type ErrorDefault = GeneralError;

export type DoneResponse<T> = {
  readonly statusCode: number;
  readonly data: T;
}

export type FailResponse<T = ErrorDefault> = {
  readonly statusCode: number;
  readonly errors: T[];
};

export type Response<D, T = ErrorDefault> = Either<FailResponse<T>, DoneResponse<D>>;

export type RawDoneResponse<T> = Pick<AxiosResponse<T>, 'status' | 'data'>;

export type RawFailResponse = Pick<AxiosError<{ readonly errors: GeneralError[] }>, 'response'>;
