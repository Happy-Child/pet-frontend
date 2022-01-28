import * as ValidationRules from '@/shared/libs/validation-rules';
import { FORM_FIELDS } from '@/shared/libs/form';
import * as yup from 'yup';

const DEFAULT_FORM_VALUES = {
  [FORM_FIELDS.EMAIL]: '',
  [FORM_FIELDS.PASSWORD]: '',
};

const FORM_SCHEMA = yup.object({
  email: ValidationRules.emailRule(),
  password: ValidationRules.passwordRule(),
});

export const FORM_PARAMS = {
  defaultValues: DEFAULT_FORM_VALUES,
  validationSchema: FORM_SCHEMA,
};
