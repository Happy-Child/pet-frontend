import {
  httpGet,
  HttpMethodResponse,
} from '@/shared/libs/http';
import { API_FULL_URL } from '../config';
import { User } from '../types';

export type Response = HttpMethodResponse<User>;

export const callRequest = (): Promise<Response> => httpGet<undefined, User>(API_FULL_URL.ME);
