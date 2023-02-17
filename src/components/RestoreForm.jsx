import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Grid,
} from '@mui/material';

const RestoreForm = () => {
  const [email, setEmail] = useState(null);
  const dataEmails = ['cuau_daali@hotmail.com'];

  const sendEmail = () => {
    if (!email || email === '' || !(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) console.log('Email no valido');
    else if (!dataEmails.find((element) => element === email) && (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) console.log('Esta mail no se encuentra registrado');
    else console.log(`se envio un correo a ${email}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel
            htmlFor="email"
            style={{ fontSize: '17px', color: '#FEBC14' }}>
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
          <FormHelperText id="email-helper">Ingresa tu Email</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth={true} onClick={sendEmail}>
          Recuperar Contraseña
        </Button>
      </Grid>
    </Grid>
  );
};

export default RestoreForm;
