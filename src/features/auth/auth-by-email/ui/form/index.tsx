import React from 'react';
import {
  Box, Button, Grid, Paper, Typography,
  FormControlLabel, Checkbox,
} from '@mui/material';
import { Internal } from '@/shared/libs/api';
import { FORM } from '@/shared/constants';
import { AppInput, AppForm } from '@/shared/ui';
import { useForm } from '@/shared/libs/form';
import { FORM_PARAMS } from '../../config';
import styles from './styles';

// !!! 1. хук/либа transform request errors to form error interface
// !!! 2. делать хук формы фитчи. там главная форма. там слушаем ошибки респонса + 1 = final errors

type FormFields = Internal.signIn.Params;

interface Props {
  readonly title?: string;
}
export const Form: React.FC<Props> = React.memo(({ title = 'Авторизация' }) => {
  const {
    control,
    handleSubmit,
    errors,
    canBeSubmit,
  } = useForm<FormFields>(FORM_PARAMS);

  const onSubmit = (): void => {
    console.log('sad');
  };

  return (
    <Paper sx={styles.root}>
      <Box>
        <Typography align="center" variant="h4" mb={2}>
          {title}
        </Typography>
        <AppForm onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>
              <AppInput
                errorText={errors[FORM.FIELDS.EMAIL]}
                control={control}
                name={FORM.FIELDS.EMAIL}
                label={FORM.LABELS.EMAIL}
              />
            </Grid>
            <Grid item>
              <AppInput
                errorText={errors[FORM.FIELDS.PASSWORD]}
                control={control}
                name={FORM.FIELDS.PASSWORD}
                label={FORM.LABELS.PASSWORD}
                type={FORM.INPUT_TYPES.PASSWORD}
              />
            </Grid>
            <Grid item>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Запомнить меня" />
            </Grid>
            <Grid item>
              <Button disabled={!canBeSubmit} type="submit" size="large" fullWidth variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </AppForm>
      </Box>
    </Paper>
  );
});
