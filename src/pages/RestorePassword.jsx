import { Box } from '@mui/material';
import React from 'react';
import RestoreForm from '../components/RestoreForm.jsx';
import Logo from '../statics/images/logo.svg';

const RestorePassword = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom="12vh">
        <Box component="img" width="50%" height="50%" alt="Logo" src={Logo} />
      </Box>
      <RestoreForm />
    </>
  );
};

export default RestorePassword;
