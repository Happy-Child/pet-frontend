import { rules } from '@/shared/libs/validation';
import { FORM_FIELDS } from '@/shared/libs/form';
import * as yup from 'yup';

const DEFAULT_FORM_VALUES = {
  [FORM_FIELDS.EMAIL]: '',
  [FORM_FIELDS.PASSWORD]: '',
};

const FORM_SCHEMA = yup.object({
  email: rules.isEmail(),
  password: rules.isPassword(),
});

export const FORM_PARAMS = {
  defaultValues: DEFAULT_FORM_VALUES,
  validationSchema: FORM_SCHEMA,
};
