import { UseFormProps } from 'react-hook-form';

export const GET_DEFAULT_FORM_SETTINGS = <T>(): UseFormProps<T> => ({
  mode: 'onSubmit',
  reValidateMode: 'onSubmit',
});
