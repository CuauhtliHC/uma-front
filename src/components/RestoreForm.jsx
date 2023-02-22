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
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const RestoreForm = () => {
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({});
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
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
    return errores;
  };

  const sendEmail = (e) => {
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
      && Object.keys(VerificateForm).length === 0
    ) {
      setOpen(false);
      setMessage({
        description: `Se envio un correo a ${email}`,
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
            style={{ fontSize: '17px', color: '#FEBC14' }}
          >
            Email
          </InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
        <BlueLargeButton handleSubmit={sendEmail}>
          Recuperar Contraseña
        </BlueLargeButton>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
          <Button
            fullWidth={true}
            style={{ textTransform: 'none', textAlign: 'center' }}
          >
            Regresar
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default RestoreForm;
