import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AlertMessage from '../commons/AlertMessage.jsx';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import { funcRestorePass } from '../utils/forms/restorePass.jsx';
import BackButtonForms from '../commons/buttons/BackButtonForms.jsx';
import InputsForm from '../commons/InputsForm.jsx';

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
        <InputsForm
          labelText={' Email del usuario'}
          inputType={'email'}
          setData={setEmail}
          errorsType={errors.email}
          textHelperForm={'Ingresá tu email'}
        />
      </Grid>
      <Grid item xs={12}>
        <BlueLargeButton handleSubmit={sendEmail}>
          Recuperar Contraseña
        </BlueLargeButton>
        <BackButtonForms />
      </Grid>
    </Grid>
  );
};

export default RestoreForm;
