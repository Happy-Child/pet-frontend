import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

export const Form: React.FC = () => (
  <Grid container direction="column" rowSpacing={2}>
    <Grid item>
      <TextField fullWidth label="Email" variant="outlined" />
    </Grid>
    <Grid item>
      <TextField fullWidth label="Password" variant="outlined" />
    </Grid>
    <Grid item>
      <Button size="large" fullWidth variant="contained">Send form</Button>
    </Grid>
  </Grid>
);
