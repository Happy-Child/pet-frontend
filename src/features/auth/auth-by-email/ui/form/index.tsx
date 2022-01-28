import React from 'react';
import {
  Box, Button, Grid, Paper, Typography,
  FormControlLabel, Checkbox,
} from '@mui/material';
import { AppInput, AppForm } from '@/shared/ui';
import {
  FORM_FIELDS, FORM_LABELS, INPUT_TYPES, useAppForm,
} from '@/shared/libs/form';
import { internal as InternalApi } from '@/shared/libs/api';
import { FORM_PARAMS } from './config';
import styles from './styles';

type SignInForm = InternalApi.signIn.Params;

const fakeReq = (): Promise<void> => new Promise((res) => {
  setTimeout(() => res(), 4000);
});

interface Props {
  readonly title?: string;
}
export const Form: React.FC<Props> = React.memo(({ title = 'Авторизация' }) => {
  const {
    control,
    handleSubmit,
    errors,
    canBeSubmit,
  } = useAppForm<SignInForm>(FORM_PARAMS);

  const onSubmit = async (): Promise<void> => {
    await fakeReq();
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
                type={INPUT_TYPES.PASSWORD}
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
