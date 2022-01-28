import * as yup from 'yup';
import { FORM_FIELDS } from '../../form';
import { GENERAL_ERRORS } from '../../../constants';
import { VALIDATION_ERRORS } from '../errors';
import { PASSWORD_REGEXP, MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from './config';

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const emailRule = (): yup.StringSchema => (
  yup
    .string()
    .required(GENERAL_ERRORS.REQUIRED)
    .matches(EMAIL_REGEXP, VALIDATION_ERRORS.EMAIL_INCORRECT)
);

export const passwordRule = (): yup.StringSchema => (
  yup
    .string()
    .required(GENERAL_ERRORS.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, ({ min }) => VALIDATION_ERRORS.PASSWORD_MIN(min))
    .max(MAX_PASSWORD_LENGTH, ({ max }) => VALIDATION_ERRORS.PASSWORD_MAX(max))
    .matches(PASSWORD_REGEXP, VALIDATION_ERRORS.PASSWORD_INCORRECT)
);

export const confirmPasswordRule = (): yup.StringSchema => (
  yup
    .string()
    .required(GENERAL_ERRORS.REQUIRED)
    .oneOf([yup.ref(FORM_FIELDS.PASSWORD)], ({ value }) => (
      String(value).length ? VALIDATION_ERRORS.PASSWORDS_MUST_MATCH : GENERAL_ERRORS.REQUIRED
    ))
);
