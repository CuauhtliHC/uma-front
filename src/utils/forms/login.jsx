import { emailRegex } from './regex.jsx';
import usuariosFake from '../../statics/DummyData/usuariosFake';

const validate = (email, password) => {
  const errores = {};
  if (!email || email === '') {
    errores.email = 'El campo Email es obligatorio';
  } else if (!emailRegex.test(email)) {
    errores.email = 'El campo Email no es válido';
  }

  if (!password || password === '') {
    errores.password = 'El campo Contraseña es obligatorio';
  }
  return errores;
};

const funcLogin = (
  email,
  setOpen,
  setMessage,
  password,
  setUser,
  saveState,
  navigate,
  setErrors,
) => {
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
  const VerificateForm = validate(email, emailRegex, password);
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
    && password === 'Plataforma5@'
  ) {
    setUser({ id: 1, email: 'cuau_daali@hotmail.com', isAdmin: false });
    saveState({ id: 1, email: 'cuau_daali@hotmail.com', isAdmin: false });
    navigate('/iniciar_jornada');
  } else if (
    dataEmails.find((element) => element === email)
    && Object.keys(VerificateForm).length === 0
    && password !== 'Plataforma5@'
  ) {
    setOpen(false);
    setMessage({
      description: 'Contraseña incorrecta',
      title: 'Error',
      status: 'error',
    });
    setOpen(true);
  }
};

export { funcLogin };
