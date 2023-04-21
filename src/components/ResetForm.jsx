import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AlertMessage from '../commons/AlertMessage.jsx';
import InputsForm from '../commons/InputsForm.jsx';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import { functResetPass } from '../utils/forms/resetPassword.jsx';

const ResetForm = () => {
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    functResetPass(
      setErrors,
      setOpen,
      setMessage,
      password,
      passwordConfirm,
    );
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlertMessage open={open} message={message} setOpen={setOpen} />
        <InputsForm
          labelText={'Contraseña'}
          inputType={'password'}
          setData={setPassword}
          errorsType={errors.password}
          textHelperForm={'Ingresá tu contraseña'}
        />
      </Grid>
      {password && (
        <Grid item xs={12}>
          <InputsForm
            labelText={'Confirmar contraseña'}
            inputType={'password'}
            setData={setPasswordConfirm}
            errorsType={errors.passwordConfirm}
            textHelperForm={'Repite tu contraseña'}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <BlueLargeButton handleSubmit={handleSubmit}>
          Cambiar Contraseña
        </BlueLargeButton>
      </Grid>
    </Grid>
  );
};

export default ResetForm;
