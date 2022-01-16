import React from 'react';
import { TextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';
import { FORM_FIELDS, INPUT_TYPES } from '@/shared/config';

export type AppInputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type AppInputProps = Pick<TextFieldProps, 'fullWidth' | 'variant' | 'label'> & {
  // eslint-disable-next-line
  readonly control: Control<Record<FORM_FIELDS, any>>; // unknown type not work :(
  readonly name: FORM_FIELDS;
  readonly type?: INPUT_TYPES;
}
