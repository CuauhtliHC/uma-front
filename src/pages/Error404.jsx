import React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MainBox } from '../statics/styles/error404.jsx';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">La página a la que ingreso no existe.</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>Regresa a la pagina principal</Button>
    </MainBox>
  );
};

export default Error404;
