import {
  methods, Response,
} from '@/shared/libs/http';
import { FULL_URLS } from '../config';
import { User } from '../types';

export const send = (): Promise<Response<User>> => methods.get<undefined, User>(FULL_URLS.ME);
