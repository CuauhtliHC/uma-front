import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AlertMessage from '../commons/AlertMessage.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';
import InputsForm from '../commons/InputsForm.jsx';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
      errores.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial';
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
