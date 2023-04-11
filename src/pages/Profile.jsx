import React from 'react';
import { useRecoilValue } from 'recoil';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  AvatarProfile,
  BoxButton,
  ButtonDelete,
  PrincipalGrid,
  SecondGrid,
} from '../statics/styles/profileStyle.jsx';
import { user } from '../state/user.jsx';

const Profile = () => {
  const dataUser = useRecoilValue(user);
  console.log(dataUser);
  return (
    <>
      <PrincipalGrid container spacing={2}>
        <Grid item>
          <AvatarProfile
            alt="foto de perfil"
            src={dataUser.fotoPerfil}
          />
        </Grid>
      </PrincipalGrid>
      <SecondGrid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Typography> {dataUser.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{dataUser.email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{dataUser.direccion}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Ya hiciste {dataUser.totalPaquetesEntregados} repartos
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
