import { Box } from '@mui/material';
import React from 'react';
import LoginForm from '../components/Login/LoginForm.jsx';
import Logo from '../statics/images/logo.svg';

const Login = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom="12vh">
        <Box component="img" width="50%" height="50%" alt="Logo" src={Logo} />
      </Box>
      <LoginForm />
    </>
  );
};

export default Login;
