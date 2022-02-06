import qs from 'query-string';
import { isUndefined } from 'lodash';

const getQueryStr = (query: Record<string, unknown>): string => qs.stringify(query, { arrayFormat: 'bracket' });

export const getUrlWithQuery = (url: string, query?: Record<string, unknown>): string => (
  isUndefined(query) ? url : `${url}?${getQueryStr(query)}`
);
