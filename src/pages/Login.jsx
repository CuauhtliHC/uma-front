import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import LoginForm from '../components/LoginForm.jsx';
import { user } from '../state/user.jsx';
import Logo from '../statics/images/logo.svg';

const Login = () => {
  const dataUser = useRecoilValue(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (dataUser) {
      navigate('/iniciar_jornada');
    }
  }, []);
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
