import axios from 'axios';
import statusCodes from 'http-status-codes';
import { ERRORS } from '@/shared/constants';
import { GeneralError } from '@/shared/libs/types';

export const INSTANCE = axios.create({ withCredentials: true });

export const DEFAULT_FAIL_STATUS_CODE = statusCodes.INTERNAL_SERVER_ERROR;

export const DEFAULT_FAIL_ERRORS: GeneralError[] = [{ field: '', messages: [ERRORS.INTERNAL.UNKNOWN] }];
