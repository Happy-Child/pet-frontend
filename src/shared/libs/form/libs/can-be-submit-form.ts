import { FieldNamesMarkedBoolean, FormState } from 'react-hook-form';
import { isNull } from 'lodash';
import * as Validation from '@/shared/libs/validation';
import { DefaultFormValues } from '../types';

const isFieldDirty = <T extends DefaultFormValues>(
  field: keyof T,
  dirtyFields: FieldNamesMarkedBoolean<T>,
): boolean => (
  (field in dirtyFields) && Boolean(dirtyFields[field as keyof FieldNamesMarkedBoolean<T>])
);

const useIsRequiredFieldsDirty = <T extends DefaultFormValues>(
  dirtyFields: FormState<T>['dirtyFields'],
  validationSchema?: UseCanBeSubmitFormParams<T>['validationSchema'],
): boolean => {
  const requiredFields = Validation.getRequiredFieldsOrNull(validationSchema);

  return isNull(requiredFields)
    ? true
    : requiredFields.every((field) => isFieldDirty(field, dirtyFields));
};

interface UseCanBeSubmitFormParams<T extends DefaultFormValues> {
  formState: Pick<FormState<T>, 'errors' | 'dirtyFields' | 'isSubmitting'>,
  validationSchema?: Validation.ObjectSchema,
}
export const useCanBeSubmitForm = <T extends DefaultFormValues>({
  formState,
  validationSchema,
}: UseCanBeSubmitFormParams<T>): boolean => {
  const isRequiredFieldsDirty = useIsRequiredFieldsDirty<T>(
    formState.dirtyFields,
    validationSchema,
  );

  const isErrorsNotExists = Object.keys(formState.errors).length === 0;

  return isRequiredFieldsDirty && isErrorsNotExists && !formState.isSubmitting;
};
