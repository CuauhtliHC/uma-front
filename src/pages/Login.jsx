import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Logo from '../statics/images/logo.svg';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

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
      <LoginForm setData={setData} data={data} />
    </>
  );
};

export default Login;
