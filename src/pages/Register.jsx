import { Box } from '@mui/material';
import React from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import Logo from '../statics/images/logo.svg';

const Register = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom="4vh">
        <Box component="img" width="50%" height="50%" alt="Logo" src={Logo} />
      </Box>
      <RegisterForm />
    </>
  );
};

export default Register;
