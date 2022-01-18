import { FormState, FieldErrors } from 'react-hook-form';
import { isNull } from 'lodash';
import { ValidationObjectSchema, getRequiredValidationFieldsOrNull } from '../../../validation';
import { isFieldDirty } from '../../helpers';
import { DefaultFormValues } from '../../types';

const useIsRequiredFieldsDirty = <T extends DefaultFormValues>(
  dirtyFields: UseCanBeSubmitFormParams<T>['dirtyFields'],
  validationSchema?: UseCanBeSubmitFormParams<T>['validationSchema'],
): boolean => {
  const requiredFields = getRequiredValidationFieldsOrNull(validationSchema);

  return isNull(requiredFields)
    ? true
    : requiredFields.every((field) => isFieldDirty(field, dirtyFields));
};

interface UseCanBeSubmitFormParams<T extends DefaultFormValues> {
  errors: FieldErrors<T>,
  dirtyFields: FormState<T>['dirtyFields']
  validationSchema?: ValidationObjectSchema,
}
export const useCanBeSubmitForm = <T extends DefaultFormValues>({
  errors,
  dirtyFields,
  validationSchema,
}: UseCanBeSubmitFormParams<T>): boolean => {
  const isRequiredFieldsDirty = useIsRequiredFieldsDirty<T>(
    dirtyFields,
    validationSchema,
  );

  return isRequiredFieldsDirty && Object.keys(errors).length === 0;
};
