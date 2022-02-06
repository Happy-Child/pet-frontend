import axios from 'axios';
import {
  Response, ReqParamsDefault, RawDoneResponse, RawFailResponse,
} from './types';
import { DEFAULT_CONFIG } from './config';
import { getUrlWithQuery, prepareDoneResponse, prepareFailResponse } from './libs';

export const get = <R extends ReqParamsDefault, D>(
  url: string,
  query?: R,
): Promise<Response<D>> => {
  const finalUrl = getUrlWithQuery(url, query);
  return axios.get<D>(finalUrl, DEFAULT_CONFIG)
    .then(
      prepareDoneResponse,
      (e: RawFailResponse) => prepareFailResponse<D>(e),
    );
};

export const post = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  axios.post<D, RawDoneResponse<D>, R>(url, data, DEFAULT_CONFIG)
    .then(
      prepareDoneResponse,
      (e: RawFailResponse) => prepareFailResponse<D>(e),
    )
);

export const put = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  axios.put<D, RawDoneResponse<D>, R>(url, data, DEFAULT_CONFIG)
    .then(
      prepareDoneResponse,
      (e: RawFailResponse) => prepareFailResponse<D>(e),
    )
);

export const patch = <R extends ReqParamsDefault, D>(url: string, data?: R): Promise<Response<D>> => (
  axios.patch<D, RawDoneResponse<D>, R>(url, data, DEFAULT_CONFIG)
    .then(
      prepareDoneResponse,
      (e: RawFailResponse) => prepareFailResponse<D>(e),
    )
);

export const del = <R extends ReqParamsDefault, D>(
  url: string,
  query?: R,
): Promise<Response<D>> => {
  const finalUrl = getUrlWithQuery(url, query);
  return axios.delete<D>(finalUrl, DEFAULT_CONFIG)
    .then(
      prepareDoneResponse,
      (e: RawFailResponse) => prepareFailResponse<D>(e),
    );
};
