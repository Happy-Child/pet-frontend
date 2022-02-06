import * as yup from 'yup';
import { REQUIRED_FIELD_ERROR } from '@/shared/constants';
import { EMAIL_RULES, PASSWORD_RULES } from './config';
import { FORM_FIELDS } from '../../form/config';
import { ERRORS } from './error-messages';

export const isEmail = (): yup.StringSchema => (
  yup
    .string()
    .required(REQUIRED_FIELD_ERROR)
    .matches(EMAIL_RULES.REGEXP, ERRORS.EMAIL_INCORRECT)
);

export const isPassword = (): yup.StringSchema => (
  yup
    .string()
    .required(REQUIRED_FIELD_ERROR)
    .min(PASSWORD_RULES.LENGTH.MIN, ({ min }) => ERRORS.PASSWORD_MIN(min))
    .max(PASSWORD_RULES.LENGTH.MAX, ({ max }) => ERRORS.PASSWORD_MAX(max))
    .matches(PASSWORD_RULES.REGEXP, ERRORS.PASSWORD_INCORRECT)
);

export const isConfirmPassword = (): yup.StringSchema => (
  yup
    .string()
    .required(REQUIRED_FIELD_ERROR)
    .oneOf([yup.ref(FORM_FIELDS.PASSWORD)], ({ value }) => (
      String(value).length ? ERRORS.PASSWORDS_MUST_MATCH : REQUIRED_FIELD_ERROR
    ))
);
