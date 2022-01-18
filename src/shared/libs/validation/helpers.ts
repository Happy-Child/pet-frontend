import { isUndefined } from 'lodash';
import { ValidationObjectSchema } from './types';

interface FieldSettings { exclusiveTests: { required?: boolean } }

export const isRequiredValidationField = (fieldName: string, schema: ValidationObjectSchema): boolean | null => {
  const fields = schema.fields as Record<string, FieldSettings>;

  if (fieldName in fields) {
    return fields[fieldName]?.exclusiveTests?.required || false;
  }

  return null;
};

export const getRequiredValidationFields = (schema: ValidationObjectSchema): string[] => {
  const fields = schema.fields as Record<string, FieldSettings>;
  const entries = Object.entries(fields);
  return entries.filter(([, settings]) => settings.exclusiveTests.required).map(([name]) => name);
};

export const getRequiredValidationFieldsOrNull = (
  schema: ValidationObjectSchema | undefined,
): ReturnType<typeof getRequiredValidationFields> | null => (
  isUndefined(schema) ? null : getRequiredValidationFields(schema)
);
