import { UseFormProps } from 'react-hook-form';

export enum INPUT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
}

export enum FORM_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export enum FORM_LABELS {
  EMAIL = 'Почта',
  PASSWORD = 'Пароль',
}

export const GET_DEFAULT_FORM_SETTINGS = <T>(): UseFormProps<T> => ({
  mode: 'onSubmit',
  reValidateMode: 'onSubmit',
});
