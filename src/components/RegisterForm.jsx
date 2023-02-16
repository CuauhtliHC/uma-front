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

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const validate = (dato) => {
    const errores = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!dato.email) {
      errores.email = 'El campo Email es obligatorio';
    } else if (!emailRegex.test(dato.email)) {
      errores.email = 'El campo Email no es válido';
    }

    if (!dato.password) {
      errores.password = 'El campo Contraseña es obligatorio';
    } else if (!passwordRegex.test(dato.password)) {
      errores.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número';
    }

    if (!dato.passwordConfirm) {
      errores.passwordConfirm = 'Repite tu contraseña';
    } else if (dato.password !== dato.passwordConfirm) {
      errores.passwordConfirm = 'Las contraseñas no coinciden';
    }

    return errores;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const VerificateForm = validate(data);
    setErrors(VerificateForm);
    // if (Object.keys(VerificateForm).length === 0)
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
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="pwd2"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
            Contraseña
          </InputLabel>
          <Input
            id="pwd2"
            type="password"
            onChange={(e) => setData({ ...data, passwordConfirm: e.target.value })
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
