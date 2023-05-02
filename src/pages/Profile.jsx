import React from 'react';
import { useRecoilValue } from 'recoil';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  AvatarProfile,
  BoxButton,
  ButtonDelete,
  PrincipalGrid,
  SecondGrid,
} from '../statics/styles/profileStyle.jsx';
import { user } from '../state/user.jsx';
import perfilDelivery from '../statics/images/delivery.jpg';
import perfilAdmin from '../statics/images/admin.jpg';

const Profile = () => {
  const dataUser = useRecoilValue(user);
  return (
    <>
      <PrincipalGrid container spacing={2}>
        <Grid item>
          <AvatarProfile
            alt="foto de perfil"
            src={
              dataUser.isAdmin === 'ADMIN_ROL' ? perfilAdmin : perfilDelivery
            }
          />
        </Grid>
      </PrincipalGrid>
      <SecondGrid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Typography style={{ color: '#1976d2' }}>
            {dataUser.name.toUpperCase()}
          </Typography>
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
        <ButtonDelete
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'rgba(165, 201, 201, 0.63)',
            color: '#424242',
            '&:hover': {
              backgroundColor: 'red',
              color: '#ffffff',
            },
          }}>
          <span style={{ paddingRight: 8 }}>ELIMINAR USUARIO</span>
          <DeleteIcon />
        </ButtonDelete>
      </BoxButton>
    </>
  );
};

export default Profile;
