import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../commons/AlertMessage.jsx';
import InputsForm from '../commons/InputsForm.jsx';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import { funcRegister } from '../utils/forms/register.jsx';
import BackButtonForms from '../commons/buttons/BackButtonForms.jsx';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    funcRegister(
      setErrors,
      email,
      setOpen,
      setMessage,
      userName,
      password,
      passwordConfirm,
      navigate,
    );
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlertMessage open={open} message={message} setOpen={setOpen} />
        <InputsForm labelText={' Email del usuario'} inputType={'email'} setData={setEmail} errorsType={errors.email} textHelperForm={'Ingresá tu email'}/>
      </Grid>
      <Grid item xs={12}>
      <InputsForm labelText={'Nombre del usuario'} inputType={'text'} setData={setUserName} errorsType={errors.userName} textHelperForm={'Ingresá tu nombre de usuario'}/>
      </Grid>
      <Grid item xs={12}>
      <InputsForm labelText={'Contraseña'} inputType={'password'} setData={setPassword} errorsType={errors.password} textHelperForm={'Ingresá tu contraseña'}/>
      </Grid>
      {password && (
        <Grid item xs={12}>
        <InputsForm labelText={'Confirmar contraseña'} inputType={'password'} setData={setPasswordConfirm} errorsType={errors.passwordConfirm} textHelperForm={'Repite tu contraseña'}/>
      </Grid>
      )}
      <Grid item xs={12}>
        <BlueLargeButton handleSubmit={handleSubmit}>
          Crear Usuario
        </BlueLargeButton>
        <BackButtonForms />
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
