import {
  methods, Response,
} from '@/shared/libs/http';
import { User } from '../types';
import { API_FULL_URL } from '../config';

export type Params = {
  readonly email: string;
  readonly password: string;
}

export const callRequest = (
  body: Params,
): Promise<Response<User>> => methods.post<Params, User>(API_FULL_URL.SIGN_IN, body);
