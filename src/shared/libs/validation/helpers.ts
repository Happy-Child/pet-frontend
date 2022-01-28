import { isUndefined } from 'lodash';
import { ObjectSchema } from './types';

interface FieldSettings { exclusiveTests: { required?: boolean } }

export const isRequiredField = (fieldName: string, schema: ObjectSchema): boolean | null => {
  const fields = schema.fields as Record<string, FieldSettings>;

  if (fieldName in fields) {
    return fields[fieldName]?.exclusiveTests?.required || false;
  }

  return null;
};

export const getRequiredFields = (schema: ObjectSchema): string[] => {
  const fields = schema.fields as Record<string, FieldSettings>;
  const entries = Object.entries(fields);
  return entries.filter(([, settings]) => settings.exclusiveTests.required).map(([name]) => name);
};

export const getRequiredFieldsOrNull = (
  schema: ObjectSchema | undefined,
): ReturnType<typeof getRequiredFields> | null => (
  isUndefined(schema) ? null : getRequiredFields(schema)
);
