import * as yup from 'yup';
import { ERRORS, FORM } from '@/shared/constants';
import { EMAIL_RULES, PASSWORD_RULES } from './config';

export const isEmail = (): yup.StringSchema => (
  yup
    .string()
    .required(ERRORS.INTERNAL.REQUIRED_FIELD_ERROR)
    .matches(EMAIL_RULES.REGEXP, ERRORS.INTERNAL.EMAIL_INCORRECT)
);

export const isPassword = (): yup.StringSchema => (
  yup
    .string()
    .required(ERRORS.INTERNAL.REQUIRED_FIELD_ERROR)
    .min(PASSWORD_RULES.LENGTH.MIN, ({ min }) => ERRORS.INTERNAL.PASSWORD_MIN(min))
    .max(PASSWORD_RULES.LENGTH.MAX, ({ max }) => ERRORS.INTERNAL.PASSWORD_MAX(max))
    .matches(PASSWORD_RULES.REGEXP, ERRORS.INTERNAL.PASSWORD_INCORRECT)
);

export const isConfirmPassword = (): yup.StringSchema => (
  yup
    .string()
    .required(ERRORS.INTERNAL.REQUIRED_FIELD_ERROR)
    .oneOf([yup.ref(FORM.FIELDS.PASSWORD)], ({ value }) => (
      String(value).length ? ERRORS.INTERNAL.PASSWORDS_MUST_MATCH : ERRORS.INTERNAL.REQUIRED_FIELD_ERROR
    ))
);
