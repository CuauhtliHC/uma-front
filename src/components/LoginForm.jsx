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

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const validate = (dato) => {
    const errores = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un correo electrónico
    if (!dato.email) {
      errores.email = 'El campo Email es obligatorio';
    } else if (!emailRegex.test(dato.email)) {
      errores.email = 'El campo Email no es válido';
    }

    if (!dato.password) {
      errores.password = 'El campo Contraseña es obligatorio';
    }
    return errores;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const VerificateForm = validate(data);
    setErrors(VerificateForm);
    if (Object.keys(VerificateForm).length === 0) {
      // Aca van las acciones reales para loguearse.
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="email"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Usuario
          </InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Contraseña
          </InputLabel>
          <Input
            id="pwd"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
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
        <Button
          fullWidth={true}
          style={{ fontWeight: '300', textTransform: 'none' }}>
          Recuperar Contraseña
        </Button>
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
