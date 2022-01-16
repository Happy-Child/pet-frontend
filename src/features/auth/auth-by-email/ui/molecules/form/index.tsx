import React from 'react';
import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppInput } from '@/shared/ui';
import { FORM_FIELDS } from '@/shared/config';

const rootStyles = { width: '100%', p: 4 };

const DEFAULT_FORM_VALUES = {
  [FORM_FIELDS.EMAIL]: '',
  [FORM_FIELDS.PASSWORD]: '',
};

export const Form: React.FC = () => {
  const { control } = useForm({ defaultValues: DEFAULT_FORM_VALUES });

  return (
    <Paper sx={rootStyles}>
      <Box>
        <Typography align="center" variant="h4" mb={2}>
          Sign in
        </Typography>
        <Grid container direction="column" rowSpacing={2}>
          <Grid item>
            <AppInput control={control} name={FORM_FIELDS.EMAIL} label="Email" />
          </Grid>
          <Grid item>
            <AppInput control={control} name={FORM_FIELDS.PASSWORD} label="Password" />
          </Grid>
          <Grid item>
            <Button size="large" fullWidth variant="contained">Send form</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
