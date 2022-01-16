import React from 'react';
import {
  Grid, TextField, Button, Box, Typography, Paper,
} from '@mui/material';

const rootStyles = { width: '100%', p: 4 };

export const Form: React.FC = () => (
  <Paper sx={rootStyles}>
    <Box>
      <Typography align="center" variant="h4" mb={2}>
        Sign in
      </Typography>
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
    </Box>
  </Paper>
);
