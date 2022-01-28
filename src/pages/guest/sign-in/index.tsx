import React from 'react';
import { GuestTemplate } from '@/shared/ui';
import { Grid } from '@mui/material';
import * as AuthByEmail from '@/features/auth/auth-by-email';

export const SignInPage: React.FC = () => (
  <GuestTemplate>
    <Grid container item xs={3} alignContent="center">
      <React.Suspense fallback={<h1>Loading</h1>}>
        <AuthByEmail.UI.Form />
      </React.Suspense>
    </Grid>
  </GuestTemplate>
);
