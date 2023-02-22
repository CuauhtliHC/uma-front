import React from 'react';
import { Button, Typography } from '@mui/material';
import { MainBox } from '../statics/styles/error404.jsx';

const Error404 = () => {
  return (
    <MainBox>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">La página a la que ingreso no existe.</Typography>
      <Button variant="contained">Regresa a la pagina principal</Button>
    </MainBox>
  );
};

export default Error404;
