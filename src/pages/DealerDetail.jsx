import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar, Box, Paper, Grid, Typography,
} from '@mui/material';
import BackButton from '../commons/buttons/BackButton.jsx';
import avatarImg from '../statics/images/avatar.png';

const DealerDetail = () => {
  const navigate = useNavigate();
  const backToDealer = () => {
    navigate('/gestionar_repartidores');
  };
  return (
    <div>
      <BackButton handleSubmit={backToDealer} />
      <Box style={{ marginTop: '5%' }}>
      <Paper style={{ margin: '2%', padding: '4%' }}>
      <Grid container spacing={3}>
      <Grid item xs={2}>
        <Avatar
          alt="foto de perfil"
          src={avatarImg}
          sx={{ width: '50px', height: '50px' }}

        />  </Grid>
         <Grid item xs={6}>
         <Typography variant="h6" gutterBottom>Farid</Typography>
         <Typography variant="h6" gutterBottom>Farid</Typography>
       </Grid>
        <Grid item xs={3}>
        <Avatar
          alt="foto de perfil"
          src={avatarImg}
          sx={{ width: '50px', height: '50px' }}

        />  </Grid>
        </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default DealerDetail;
