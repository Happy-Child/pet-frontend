import { INPUT_TYPES } from '@/shared/libs/form';
import { AppInputProps } from './types';

export const APP_INPUT_DEFAULT_PROPS: Pick<
AppInputProps,
'type' | 'fullWidth' | 'variant' | 'disabled' | 'required'
> = {
  type: INPUT_TYPES.TEXT,
  fullWidth: true,
  variant: 'outlined',
  required: true,
  disabled: false,
};
