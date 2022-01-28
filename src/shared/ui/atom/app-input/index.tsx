import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { INPUT_TYPES } from '@/shared/libs/form';
import { APP_INPUT_DEFAULT_PROPS } from './constants';
import { getEventWithReplacedValue } from './helpers';
import { AppInputProps, AppInputChangeEvent } from './types';

export const AppInput: React.FC<AppInputProps> = ({
  control,
  name,
  label,
  type = APP_INPUT_DEFAULT_PROPS.type,
  fullWidth = APP_INPUT_DEFAULT_PROPS.fullWidth,
  variant = APP_INPUT_DEFAULT_PROPS.variant,
  required = APP_INPUT_DEFAULT_PROPS.required,
  disabled = APP_INPUT_DEFAULT_PROPS.disabled,
  errorText = undefined,
}) => {
  const isNumber = type === INPUT_TYPES.NUMBER;

  const getModifiedEventValue = (e: AppInputChangeEvent): AppInputChangeEvent => {
    if (isNumber) {
      return getEventWithReplacedValue(e, Number(e.target.value));
    }
    return e;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }): React.ReactElement => (
        <TextField
          onChange={(e): void => field.onChange(getModifiedEventValue(e))}
          onBlur={field.onBlur}
          type={type}
          fullWidth={fullWidth}
          label={label}
          variant={variant}
          required={required}
          disabled={disabled}
          error={Boolean(errorText)}
          helperText={errorText}
        />
      )}
    />
  );
};
