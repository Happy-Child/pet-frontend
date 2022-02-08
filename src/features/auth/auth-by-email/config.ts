import { rules } from '@/shared/libs/validation';
import { FORM } from '@/shared/constants';
import * as yup from 'yup';

const DEFAULT_FORM_VALUES = {
  [FORM.FIELDS.EMAIL]: '',
  [FORM.FIELDS.PASSWORD]: '',
};

const FORM_SCHEMA = yup.object({
  email: rules.isEmail(),
  password: rules.isPassword(),
});

export const FORM_PARAMS = {
  defaultValues: DEFAULT_FORM_VALUES,
  validationSchema: FORM_SCHEMA,
};
