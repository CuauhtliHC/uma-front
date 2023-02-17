import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AlertMessage from '../commons/AlertMessage.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  const validate = () => {
    const errores = {};

    if (!email || email === '') {
      errores.email = 'El campo Email es obligatorio';
    } else if (!emailRegex.test(email)) {
      errores.email = 'El campo Email no es válido';
    }
    if (!userName || userName === '') {
      errores.userName = 'El campo Nombre del usuario es obligatorio';
    }

    if (!password) {
      errores.password = 'El campo Contraseña es obligatorio';
    } else if (!passwordRegex.test(password)) {
      errores.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número';
    }

    if (!passwordConfirm) {
      errores.passwordConfirm = 'Repite tu contraseña';
    } else if (password !== passwordConfirm) {
      errores.passwordConfirm = 'Las contraseñas no coinciden';
    }

    return errores;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const VerificateForm = validate();
    setErrors(VerificateForm);
    if (
      dataEmails.find((element) => element === email)
      && Object.keys(VerificateForm).length === 0
    ) {
      setOpen(false);
      setMessage({
        description: 'Este mail ya esta registrado',
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    } else if (
      Object.keys(VerificateForm).length === 0
    ) {
      setOpen(false);
      setMessage({
        description: 'Se a registrado la cuenta',
        title: 'Exito',
        status: 'success',
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
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Email del usuario
          </InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
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
            htmlFor="userName"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Nombre del usuario
          </InputLabel>
          <Input
            id="userName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName ? (
            <FormHelperText error>{errors.userName}</FormHelperText>
          ) : (
            <FormHelperText id="UserName-helper">Ingresa tu nombre de usuario</FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="pwd"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Contraseña
          </InputLabel>
          <Input
            id="pwd"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
      {password && (
        <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="pwd2"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Confirmar contraseña
          </InputLabel>
          <Input
            id="pwd2"
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)
            }
          />
          {errors.passwordConfirm ? (
            <FormHelperText error>{errors.passwordConfirm}</FormHelperText>
          ) : (
            <FormHelperText id="password-helper">
              Repite tu contraseña
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      )}
      <Grid item xs={12}>
        <Button variant="contained" fullWidth={true} onClick={handleSubmit}>
          Crear Usuario
        </Button>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
          <Button
            fullWidth={true}
            style={{ textTransform: 'none', textAlign: 'center' }}>
            Regresar
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
