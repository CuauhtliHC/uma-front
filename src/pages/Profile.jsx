import React from 'react';
import {
  Avatar, Box, Grid, Typography, Button,
} from '@mui/material';
import usuariosFake from '../statics/DummyData/usuariosFake';

const Profile = () => {
  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        justify="center"
        spacing={2}
        style={{ marginTop: '2%', marginBottom: '8%' }}>
        <Grid item>
          <Avatar
            alt="foto de perfil"
            src={usuariosFake[1].fotoPerfil}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        justify="center"
        spacing={2}
        direction="column">
        <Grid item xs={12}>
          <Typography> {usuariosFake[0].nombre}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{usuariosFake[0].email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{usuariosFake[0].direccion}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Ya hiciste {usuariosFake[0].totalPaquetesEntregados} repartos
          </Typography>
        </Grid>
      </Grid>
      <Box style={{ margin: '2%', marginTop: '10%' }}>
        <Button variant="contained" fullWidth>
          EDITAR PERFIL
        </Button>
        <Button
          variant="contained"
          color="error"
          fullWidth
          style={{ marginTop: '5%' }}>
          ELIMINAR USUARIO
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
