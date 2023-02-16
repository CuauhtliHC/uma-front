import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@mui/material';

const LoginForm = ({ data, setData }) => {
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
          <FormHelperText id="email-helper">Ingresa tu Email</FormHelperText>
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
          <FormHelperText id="password-helper">
            Ingresa tu Contraseña
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth={true}>
          Ingresar
        </Button>
        <Button
          fullWidth={true}
          style={{ fontWeight: '300', textTransform: 'none' }}>
          Recuperar Contraseña
        </Button>
        <Button fullWidth={true} style={{ textTransform: 'none' }}>
          Registrarse
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
