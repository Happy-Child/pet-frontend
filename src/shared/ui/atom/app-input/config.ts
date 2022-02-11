import { FORM } from '@/shared/constants';
import { Props } from './types';

export const DEFAULT_PROPS: Pick<Props, 'type' | 'fullWidth' | 'variant' | 'disabled' | 'required'> = {
  type: FORM.INPUT_TYPES.TEXT,
  fullWidth: true,
  variant: 'outlined',
  required: true,
  disabled: false,
};
