import React from 'react';
import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material';
import { AppInput } from '@/shared/ui';
import { FORM_FIELDS, FORM_LABELS } from '@/shared/config';
import { useAppForm } from '@/shared/libs/form';
import * as yup from 'yup';
import { DEFAULT_FORM_VALUES } from '../../../config';

const rootStyles = { width: '100%', p: 4 };

const validationSchema = yup.object({
  email: yup.string().min(10).required('Required'),
  password: yup.string().required('Required'),
});

interface Props {
  readonly title?: string;
}
export const Form: React.FC<Props> = ({ title = 'Sign in' }) => {
  const {
    control,
    handleSubmit,
    errors,
    canBeSubmit,
  } = useAppForm({ defaultValues: DEFAULT_FORM_VALUES, validationSchema });

  const onSubmit = (): void => {
    console.log('waefgdresdfg');
    //
  };

  return (
    <Paper sx={rootStyles}>
      <Box>
        <Typography align="center" variant="h4" mb={2}>
          {title}
        </Typography>
        <form onSubmit={canBeSubmit ? handleSubmit(onSubmit) : undefined}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>
              <AppInput
                errorText={errors[FORM_FIELDS.EMAIL]}
                control={control}
                name={FORM_FIELDS.EMAIL}
                label={FORM_LABELS.EMAIL}
              />
            </Grid>
            <Grid item>
              <AppInput
                errorText={errors[FORM_FIELDS.PASSWORD]}
                control={control}
                name={FORM_FIELDS.PASSWORD}
                label={FORM_LABELS.PASSWORD}
              />
            </Grid>
            <Grid item>
              <Button disabled={!canBeSubmit} type="submit" size="large" fullWidth variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};
