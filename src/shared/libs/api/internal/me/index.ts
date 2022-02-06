import {
  methods, Response,
} from '@/shared/libs/http';
import { API_FULL_URL } from '../config';
import { User } from '../types';

export const send = (): Promise<Response<User>> => methods.get<undefined, User>(API_FULL_URL.ME);
