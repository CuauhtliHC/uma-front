import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AlertMessage from '../../commons/AlertMessage.jsx';
import { user } from '../../state/user.jsx';
import { saveState } from '../../utils/browserStorage.jsx';
import InputsForm from '../../commons/InputsForm.jsx';
import BlueLargeButton from '../../commons/buttons/BlueLargeButton.jsx';
import { funcLogin } from '../../utils/forms/login.jsx';

const LoginForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(user);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    funcLogin(
      email,
      setOpen,
      setMessage,
      password,
      setUser,
      saveState,
      navigate,
      setErrors,
    );
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlertMessage open={open} message={message} setOpen={setOpen} />
        <InputsForm labelText={'Usuario'} inputType={'email'} setData={setEmail} errorsType={errors.email} textHelperForm={'Ingresá tu email'}/>
      </Grid>
      <Grid item xs={12}>
        <InputsForm labelText={'Contraseña'} inputType={'password'} setData={setPassword} errorsType={errors.password} textHelperForm={'Ingresá tu contraseña'}/>
      </Grid>
      <Grid item xs={12}>
        <BlueLargeButton handleSubmit={handleSubmit}>
          Ingresar
        </BlueLargeButton>
        <Link to={'/recuperar_contraseña'} style={{ textDecoration: 'none' }}>
          <Button
            fullWidth={true}
            style={{ fontWeight: '300', textTransform: 'none' }}
          >
            Recuperar Contraseña
          </Button>
        </Link>
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <Button fullWidth={true} style={{ textTransform: 'none' }}>
            Registrarse
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
