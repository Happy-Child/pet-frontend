import React from 'react';
import { GuestTemplate } from '@/shared/ui/templates';
import {
  Grid, Paper, Box, Typography,
} from '@mui/material';
import { UI as AuthByEmailUI } from '@/features/auth/auth-by-email';

export const SignInPage: React.FC = () => (
  <GuestTemplate>
    <Grid container item xs={3} alignContent="center">
      <Paper sx={{ width: '100%', p: 4 }}>
        <Box>
          <Typography align="center" variant="h4" mb={2}>
            Sign in
          </Typography>
          <AuthByEmailUI.Form />
        </Box>
      </Paper>
    </Grid>
  </GuestTemplate>
);
