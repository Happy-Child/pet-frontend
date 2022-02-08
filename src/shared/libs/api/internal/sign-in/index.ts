import {
  methods, Response,
} from '@/shared/libs/http';
import { User } from '../types';
import { FULL_URLS } from '../config';

export type Params = {
  readonly email: string;
  readonly password: string;
}

export const send = (
  body: Params,
): Promise<Response<User>> => methods.post<Params, User>(FULL_URLS.SIGN_IN, body);
