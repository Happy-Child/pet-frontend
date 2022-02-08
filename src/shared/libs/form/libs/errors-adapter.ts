import { FieldErrors, FieldError } from 'react-hook-form';
import { capitalize } from 'lodash';
import { DefaultFormValues } from '../types';

export const useErrorsAdapter = <T extends DefaultFormValues>(
  errors: FieldErrors<T>,
): Record<keyof T, string | undefined> => {
  const fields = Object.keys(errors) as (keyof T)[];

  if (fields.length === 0) {
    return {} as Record<keyof T, string | undefined>;
  }

  return fields.reduce((errorsMap, field) => {
    const error = errors[String(field)] as FieldError;
    return { ...errorsMap, [field]: capitalize(error.message) };
  }, {}) as Record<keyof T, string | undefined>;
};
