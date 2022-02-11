import React from 'react';
import {
  useForm as useRootForm, UseFormReturn, UseFormProps,
  UseFormHandleSubmit, SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from '@/shared/libs/validation';
import { GET_DEFAULT_FORM_SETTINGS } from './config';
import { DefaultFormValues } from './types';
import { useResetFailFieldsOnChange } from './libs/reset-fail-fields-on-change';
import { useCanBeSubmitForm } from './libs/can-be-submit-form';
import { useErrorsAdapter } from './libs/errors-adapter';

const handleSubmitPlaceholder = (e: React.BaseSyntheticEvent): void => {
  e.preventDefault();
};

type BaseParams<T> = Pick<UseFormProps<T>, 'defaultValues'>;
export type Params<T extends DefaultFormValues> = BaseParams<T> & {
  validationSchema?: ObjectSchema,
};

type BaseReturn<T> = Pick<UseFormReturn<T>, | 'control'>;
export type Return<T extends DefaultFormValues> = BaseReturn<T> & {
  canBeSubmit: boolean;
  errors: Record<keyof T, string | undefined>;
  handleSubmit: (
    onValid: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T>,
  ) => ReturnType<UseFormHandleSubmit<T>> | typeof handleSubmitPlaceholder;
};

export const useForm = <T extends DefaultFormValues>(params: Params<T>): Return<T> => {
  const resolver = params.validationSchema ? yupResolver(params.validationSchema) : undefined;
  const {
    formState, handleSubmit, control, watch, clearErrors,
  } = useRootForm<T>({ ...GET_DEFAULT_FORM_SETTINGS<T>(), ...params, resolver });

  useResetFailFieldsOnChange({
    errors: formState.errors,
    watch,
    clearErrors,
  });

  const canBeSubmit = useCanBeSubmitForm<T>({
    formState,
    validationSchema: params.validationSchema,
  });

  const errors = useErrorsAdapter<T>(formState.errors);

  const finalHandleSubmit = (
    onValid: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T>,
  ): ReturnType<UseFormHandleSubmit<T>> | typeof handleSubmitPlaceholder => (
    canBeSubmit ? handleSubmit(onValid, onInvalid) : handleSubmitPlaceholder
  );

  return {
    control,
    canBeSubmit,
    errors,
    handleSubmit: finalHandleSubmit,
  };
};
