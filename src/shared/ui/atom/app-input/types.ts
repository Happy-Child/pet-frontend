import React from 'react';
import { TextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';
import { FORM } from '@/shared/constants';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type Props = Pick<TextFieldProps, 'fullWidth' | 'variant' | 'label' | 'required' | 'disabled'> & {
  // eslint-disable-next-line
  readonly control: Control<Record<FORM.FIELDS, any>>; // unknown type not work :(
  readonly name: FORM.FIELDS;
  readonly type?: FORM.INPUT_TYPES;
  readonly errorText?: string;
}
