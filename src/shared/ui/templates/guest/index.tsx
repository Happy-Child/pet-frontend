import React from 'react';
import { Grid } from '@mui/material';

export const GuestTemplate: React.FC = ({ children }) => (
  <Grid className="pageTemplate" p={4} container justifyContent="center" bgcolor="#E7EBF0">
    {children}
  </Grid>
);
