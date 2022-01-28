import { FORM_FIELDS } from '@/shared/libs/form';
import * as yup from 'yup';
import { emailRule, passwordRule } from '@/shared/libs/validation';

const DEFAULT_FORM_VALUES = {
  [FORM_FIELDS.EMAIL]: '',
  [FORM_FIELDS.PASSWORD]: '',
};

const FORM_SCHEMA = yup.object({
  email: emailRule(),
  password: passwordRule(),
});

export const FORM_PARAMS = {
  defaultValues: DEFAULT_FORM_VALUES,
  validationSchema: FORM_SCHEMA,
};
