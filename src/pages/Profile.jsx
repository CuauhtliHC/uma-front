import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import usuariosFake from '../statics/DummyData/usuariosFake';
import {
  AvatarProfile,
  BoxButton,
  ButtonDelete,
  PrincipalGrid,
  SecondGrid,
} from '../statics/styles/profileStyle.jsx';

const Profile = () => {
  return (
    <>
      <PrincipalGrid container spacing={2}>
        <Grid item>
          <AvatarProfile
            alt="foto de perfil"
            src={usuariosFake[1].fotoPerfil}
          />
        </Grid>
      </PrincipalGrid>
      <SecondGrid container spacing={2} direction="column">
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
      </SecondGrid>
      <BoxButton>
        <Button variant="contained" fullWidth>
          EDITAR PERFIL
        </Button>
        <ButtonDelete variant="contained" fullWidth>
          ELIMINAR USUARIO
        </ButtonDelete>
      </BoxButton>
    </>
  );
};

export default Profile;
