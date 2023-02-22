import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const DistributorsCard = ({
  name, status, percentage, avatar,
}) => {
  return (
    <Box style={{ marginTop: '5%' }}>
      <Grid container spacing={2}>
        <Grid item xs={8} container spacing={1}>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {percentage}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" spacing={2} justify="flex-end">
              <Grid item>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {status}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ alignItems: 'center' }}>
            <img
              src={avatar}
              alt="Reparto en curso"
              style={{ width: '70px' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DistributorsCard;
