import statusCodes from 'http-status-codes';
import { GENERAL_ERRORS_KEYS } from '@/shared/constants';
import { GeneralError } from '@/shared/libs/types';

export const HTTP_METHOD_CONFIG = { withCredentials: true };

export const DEFAULT_FAIL_STATUS_CODE = statusCodes.INTERNAL_SERVER_ERROR;

export const DEFAULT_FAIL_ERRORS: GeneralError[] = [{ field: '', messages: [GENERAL_ERRORS_KEYS.UNKNOWN] }];
