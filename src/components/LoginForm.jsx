import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AlertMessage from '../commons/AlertMessage.jsx';
import { user } from '../state/user.jsx';
import { saveState } from '../utils/browserStorage.jsx';

const LoginForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(user);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dataEmails = ['cuau_daali@hotmail.com'];
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errores = {};
    if (!email || email === '') {
      errores.email = 'El campo Email es obligatorio';
    } else if (!emailRegex.test(email)) {
      errores.email = 'El campo Email no es válido';
    }

    if (!password || password === '') {
      errores.password = 'El campo Contraseña es obligatorio';
    }
    return errores;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const VerificateForm = validate();
    setErrors(VerificateForm);
    if (
      !dataEmails.find((element) => element === email)
      && Object.keys(VerificateForm).length === 0
    ) {
      setOpen(false);
      setMessage({
        description: 'Esta mail no se encuentra registrado',
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    } else if (
      emailRegex.test(email)
      && Object.keys(VerificateForm).length === 0 && password === 'Plataforma5@'
    ) {
      setUser({ id: 1, email: 'cuau_daali@hotmail.com', isAdmin: false });
      saveState({ id: 1, email: 'cuau_daali@hotmail.com', isAdmin: false });
      navigate('/iniciar_jornada');
    } else if (dataEmails.find((element) => element === email) && Object.keys(VerificateForm).length === 0 && password !== 'Plataforma5@') {
      setOpen(false);
      setMessage({
        description: 'Contraseña incorrecta',
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlertMessage open={open} message={message} setOpen={setOpen} />
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="email"
            style={{ fontSize: '17px', color: '#FEBC14' }}
          >
            Usuario
          </InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email ? (
            <FormHelperText error>{errors.email}</FormHelperText>
          ) : (
            <FormHelperText id="email-helper">Ingresa tu Email</FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="pwd"
            style={{ fontSize: '17px', color: '#FEBC14' }}
          >
            Contraseña
          </InputLabel>
          <Input
            id="pwd"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password ? (
            <FormHelperText error>{errors.password}</FormHelperText>
          ) : (
            <FormHelperText id="password-helper">
              Ingresa tu Contraseña
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth={true} onClick={handleSubmit}>
          Ingresar
        </Button>
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
