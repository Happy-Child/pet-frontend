import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FORM } from '@/shared/constants';
import { DEFAULT_PROPS } from './config';
import { replaceEventValue } from './libs';
import { Props, ChangeEvent } from './types';

export const AppInput: React.FC<Props> = ({
  control,
  name,
  label,
  type = DEFAULT_PROPS.type,
  fullWidth = DEFAULT_PROPS.fullWidth,
  variant = DEFAULT_PROPS.variant,
  required = DEFAULT_PROPS.required,
  disabled = DEFAULT_PROPS.disabled,
  errorText = undefined,
}) => {
  const isNumber = type === FORM.INPUT_TYPES.NUMBER;

  const getModifiedEventValue = (e: ChangeEvent): ChangeEvent => {
    if (isNumber) {
      return replaceEventValue(e, Number(e.target.value));
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
