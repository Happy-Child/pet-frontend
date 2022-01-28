import axios, { AxiosResponse } from 'axios';
import qs from 'query-string';
import { isUndefined } from 'lodash';
import { prepareHttpDoneResponse, prepareHttpFailResponse } from './adapters';
import { AxiosFailResponse, HttpMethodResponse, HttpReqDefault } from './types';
import { HTTP_METHOD_CONFIG } from './config';

const getQueryStr = (query: Record<string, unknown>): string => qs.stringify(query, { arrayFormat: 'bracket' });

export const httpGet = <R extends HttpReqDefault, D>(
  url: string,
  query?: R,
): Promise<HttpMethodResponse<D>> => {
  const finalUrl = isUndefined(query) ? url : `${url}?${getQueryStr(query)}`;
  return axios.get<D>(finalUrl, HTTP_METHOD_CONFIG)
    .then(
      prepareHttpDoneResponse,
      (e: AxiosFailResponse) => prepareHttpFailResponse<D>(e),
    );
};

export const httpPost = <R extends HttpReqDefault, D>(url: string, data?: R): Promise<HttpMethodResponse<D>> => (
  axios.post<D, AxiosResponse<D>, R>(url, data, HTTP_METHOD_CONFIG)
    .then(
      prepareHttpDoneResponse,
      (e: AxiosFailResponse) => prepareHttpFailResponse<D>(e),
    )
);

export const httpPut = <R extends HttpReqDefault, D>(url: string, data?: R): Promise<HttpMethodResponse<D>> => (
  axios.put<D, AxiosResponse<D>, R>(url, data, HTTP_METHOD_CONFIG)
    .then(
      prepareHttpDoneResponse,
      (e: AxiosFailResponse) => prepareHttpFailResponse<D>(e),
    )
);

export const httpPatch = <R extends HttpReqDefault, D>(url: string, data?: R): Promise<HttpMethodResponse<D>> => (
  axios.patch<D, AxiosResponse<D>, R>(url, data, HTTP_METHOD_CONFIG)
    .then(
      prepareHttpDoneResponse,
      (e: AxiosFailResponse) => prepareHttpFailResponse<D>(e),
    )
);

export const httpDelete = <R extends HttpReqDefault, D>(
  url: string,
  query?: R,
): Promise<HttpMethodResponse<D>> => {
  const finalUrl = isUndefined(query) ? url : `${url}?${getQueryStr(query)}`;
  return axios.delete<D>(finalUrl, HTTP_METHOD_CONFIG)
    .then(
      prepareHttpDoneResponse,
      (e: AxiosFailResponse) => prepareHttpFailResponse<D>(e),
    );
};
