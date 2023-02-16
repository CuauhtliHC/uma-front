import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import Logo from '../statics/images/logo.svg';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  console.log(data);
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
      <RegisterForm data={data} setData={setData} />
    </>
  );
};

export default Register;
