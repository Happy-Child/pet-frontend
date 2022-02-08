import { useCallback } from 'react';
import {
  UseFormWatch, UseFormClearErrors, FieldErrors, FieldPath,
} from 'react-hook-form';
import { useWatchFormByFlag } from './watch-form-by-flag';
import { DefaultFormValues } from '../types';

interface UseResetFailFieldsOnChangeParams<T extends DefaultFormValues> {
  errors: FieldErrors<T>
  watch: UseFormWatch<T>,
  clearErrors: UseFormClearErrors<T>
}
export const useResetFailFieldsOnChange = <T extends DefaultFormValues>({
  errors,
  watch,
  clearErrors,
}: UseResetFailFieldsOnChangeParams<T>): void => {
  const failFields = Object.keys(errors);

  const handleResetFailFields = useCallback((_, { name }) => {
    const isFailField = failFields.includes(String(name));
    if (isFailField) clearErrors(name as FieldPath<T>);
  }, [failFields, clearErrors]);

  useWatchFormByFlag<T>(
    watch,
    handleResetFailFields,
    failFields.length !== 0,
  );
};
