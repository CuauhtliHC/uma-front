import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AlertMessage from '../../commons/AlertMessage.jsx';
import { user } from '../../state/user.jsx';
import { saveState } from '../../utils/browserStorage.jsx';
import InputsForm from '../../commons/InputsForm.jsx';
import BlueLargeButton from '../../commons/buttons/BlueLargeButton.jsx';
import { funcLogin } from '../../utils/forms/login.jsx';
import { RestorePassButton } from '../../statics/styles/button/restorePassButton.jsx';

const LoginForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(user);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    funcLogin(
      email,
      setOpen,
      setMessage,
      password,
      setUser,
      saveState,
      navigate,
      setErrors,
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AlertMessage open={open} message={message} setOpen={setOpen} />
        <InputsForm
          labelText={'Usuario'}
          inputType={'email'}
          setData={setEmail}
          errorsType={errors.email}
          textHelperForm={'Ingresá tu email'}
        />
      </Grid>
      <Grid item xs={12}>
      <div style={{ position: 'relative' }}>
    <InputsForm
      labelText={'Contraseña'}
      inputType={showPassword ? 'text' : 'password'}
      setData={setPassword}
      errorsType={errors.password}
      textHelperForm={'Ingresá tu contraseña'}
    />
    <IconButton
      style={{
        position: 'absolute', top: '45%', right: 10, transform: 'translateY(-49%)',
      }}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </IconButton>
  </div>
      </Grid>
      <Grid item xs={12}>
        <BlueLargeButton handleSubmit={handleSubmit}>
          Ingresar
        </BlueLargeButton>
        <RestorePassButton
          fullWidth={true}
          onClick={() => navigate('/recuperar_contraseña')}
        >
          Recuperar Contraseña
        </RestorePassButton>
        <Button fullWidth={true} onClick={() => navigate('/register')}>
          Registrarse
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
