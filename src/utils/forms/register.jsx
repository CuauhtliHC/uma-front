import { emailRegex, passwordRegex } from './regex.jsx';
import usuariosFake from '../../statics/DummyData/usuariosFake';

const validate = (email, userName, password, passwordConfirm) => {
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

const funcRegister = (
  setErrors,
  email,
  setOpen,
  setMessage,
  userName,
  password,
  passwordConfirm,
) => {
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
  const VerificateForm = validate(email, userName, password, passwordConfirm);
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
  } else if (Object.keys(VerificateForm).length === 0) {
    setOpen(false);
    setMessage({
      description: 'Se a registrado la cuenta',
      title: 'Exito',
      status: 'success',
    });
    setOpen(true);
  }
};

export { funcRegister };
