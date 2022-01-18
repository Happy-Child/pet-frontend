import {
  useForm, UseFormReturn, UseFormProps,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationObjectSchema } from '@/shared/libs/validation';
import { GET_DEFAULT_FORM_SETTINGS } from '@/shared/config';
import { DefaultFormValues } from '../../types';
import { useResetFailFieldsOnChange } from './reset-fail-fields-on-change.hook';
import { useCanBeSubmitForm } from './can-be-submit-form.hook';
import { useFormErrorsAdapter } from '../../adapters';

type UseFormPropsAllowed<T> = Pick<UseFormProps<T>, 'defaultValues'>;
type UseAppFormParamsExtended = {
  validationSchema?: ValidationObjectSchema,
}
type UseAppFormParams<T extends DefaultFormValues> = UseFormPropsAllowed<T> & UseAppFormParamsExtended;

type UseFormReturnAllowed<T> = Pick<UseFormReturn<T>, 'handleSubmit' | 'control'>;
type UseAppFormReturnExtended<T> = {
  canBeSubmit: boolean;
  errors: Record<keyof T, string | undefined>;
}
type UseAppFormReturn<T extends DefaultFormValues> = UseFormReturnAllowed<T> & UseAppFormReturnExtended<T>;

export const useAppForm = <T extends DefaultFormValues>(params: UseAppFormParams<T>): UseAppFormReturn<T> => {
  const resolver = params.validationSchema ? yupResolver(params.validationSchema) : undefined;
  const {
    formState, handleSubmit, control, watch, clearErrors,
  } = useForm<T>({ ...GET_DEFAULT_FORM_SETTINGS<T>(), ...params, resolver });

  useResetFailFieldsOnChange({
    errors: formState.errors,
    watch,
    clearErrors,
  });

  const canBeSubmit = useCanBeSubmitForm<T>({
    errors: formState.errors,
    dirtyFields: formState.dirtyFields,
    validationSchema: params.validationSchema,
  });

  const errors = useFormErrorsAdapter<T>(formState.errors);

  return {
    handleSubmit,
    control,
    canBeSubmit,
    errors,
  };
};
