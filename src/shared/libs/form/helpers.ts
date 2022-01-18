import { FieldNamesMarkedBoolean } from 'react-hook-form';
import { DefaultFormValues } from './types';

export const isFieldDirty = <T extends DefaultFormValues>(
  field: keyof T,
  dirtyFields: FieldNamesMarkedBoolean<T>,
): boolean => (
  (field in dirtyFields) && Boolean(dirtyFields[field as keyof FieldNamesMarkedBoolean<T>])
);
