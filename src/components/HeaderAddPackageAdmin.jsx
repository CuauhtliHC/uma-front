import React from 'react';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import BackButton from '../commons/buttons/BackButton.jsx';
import { HeaderGridMain, HeaderSecondGrid, TitleAddPackageAdmin } from '../statics/styles/AddPackageAdmin/headerStyle.jsx';

const HeaderAddPackageAdmin = () => {
  const navigate = useNavigate();
  return (
    <HeaderGridMain container>
      <Grid item xs={12}>
        <BackButton handleSubmit={() => navigate('/gestionar_paquetes')} />
      </Grid>
      <HeaderSecondGrid item>
        <TitleAddPackageAdmin>Agregar Paquetes</TitleAddPackageAdmin>
      </HeaderSecondGrid>
    </HeaderGridMain>
  );
};

export default HeaderAddPackageAdmin;
