import {
  Response, ReqParamsDefault, RawDoneResponse, RawFailResponse,
} from './types';
import { INSTANCE } from './config';
import { getUrlWithQuery } from './libs/query-url';
import { prepareDoneResponse, prepareFailResponse } from './libs/adapters';

export const get = <R extends ReqParamsDefault, D>(
  url: string,
  query?: R,
): Promise<Response<D>> => {
  const finalUrl = getUrlWithQuery(url, query);
  return INSTANCE.get<D>(finalUrl).then(
    prepareDoneResponse,
    (e: RawFailResponse) => prepareFailResponse<D>(e),
  );
};

export const post = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  INSTANCE.post<D, RawDoneResponse<D>, R>(url, data).then(
    prepareDoneResponse,
    (e: RawFailResponse) => prepareFailResponse<D>(e),
  )
);

export const put = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  INSTANCE.put<D, RawDoneResponse<D>, R>(url, data).then(
    prepareDoneResponse,
    (e: RawFailResponse) => prepareFailResponse<D>(e),
  )
);

export const patch = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  INSTANCE.patch<D, RawDoneResponse<D>, R>(url, data).then(
    prepareDoneResponse,
    (e: RawFailResponse) => prepareFailResponse<D>(e),
  )
);

export const del = <R extends ReqParamsDefault, D>(
  url: string,
  query?: R,
): Promise<Response<D>> => {
  const finalUrl = getUrlWithQuery(url, query);
  return INSTANCE.delete<D>(finalUrl).then(
    prepareDoneResponse,
    (e: RawFailResponse) => prepareFailResponse<D>(e),
  );
};
