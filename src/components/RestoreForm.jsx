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
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import { funcRestorePass } from '../utils/forms/restorePass.jsx';

const RestoreForm = () => {
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    funcRestorePass(setErrors, setOpen, setMessage, email);
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
