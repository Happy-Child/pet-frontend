import React from 'react';
import { GuestTemplate } from '@/shared/ui/templates';
import { Grid } from '@mui/material';
import * as AuthByEmail from '@/features/auth/auth-by-email';

export const SignInPage: React.FC = () => (
  <GuestTemplate>
    <Grid container item xs={3} alignContent="center">
      <AuthByEmail.UI.Form />
    </Grid>
  </GuestTemplate>
);
