import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
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
import Loader from '../components/Loader.jsx';
import { funcDisableUserById } from '../service/disableUser.jsx';

const Profile = () => {
  const dataUser = useRecoilValue(user);
  const setUser = useSetRecoilState(user);
  const navigate = useNavigate();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  console.log(dataUser.id);
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
        {/* <div style={{ position: 'relative' }}>
          {loadingUpdate ? (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '3vh',
              }}>
              <Loader size={30} color="primary" visible={loadingUpdate} />
            </div>
          ) : (
            <Button
              variant="contained"
              fullWidth
              onClick={() => setLoadingUpdate(!loadingUpdate)}>
              EDITAR PERFIL
            </Button>
          )}
        </div> */}

        <div style={{ position: 'relative' }}>
          {loadingDelete ? (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                marginTop: '32px',
              }}>
              <Loader size={30} color="primary" visible={loadingDelete} />
            </div>
          ) : (
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
              }}
              onClick={() => {
                setLoadingDelete(!loadingDelete);
                funcDisableUserById(dataUser.id).then(() => {
                  setUser(null);
                  navigate('/login');
                });
              }}>
              <span style={{ paddingRight: 8 }}>ELIMINAR USUARIO</span>
              <DeleteIcon />
            </ButtonDelete>
          )}
        </div>
      </BoxButton>
    </>
  );
};

export default Profile;
