import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Logo from '../statics/images/logo.svg';

const Login = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '12vh',
        }}>
        <img src={Logo} alt="logo" width={'50%'} height={'50%'} />
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
