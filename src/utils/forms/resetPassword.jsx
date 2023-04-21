import axios from 'axios';
import { passwordRegex } from './regex.jsx';

const validate = (password, passwordConfirm) => {
  const errores = {};

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

const functResetPass = (
  password,
  passwordConfirm,
  setErrors,
  setOpen,
  setMessage,
  token,
) => {
  const VerificateForm = validate(password, passwordConfirm);
  setErrors(VerificateForm);
  if (Object.keys(VerificateForm).length === 0) {
    setOpen(false);
    axios
      .post(`${process.env.URL_BACKEND}users/reset-password/${token}`, {
        password,
      })
      .then((res) => {
        setMessage({
          description: 'Se a registrado la cuenta',
          title: 'Exito',
          status: 'success',
        });
        setOpen(true);
      })
      .catch((error) => {
        setMessage({
          description: 'Este mail ya esta registrado',
          title: 'Error',
          status: 'error',
        });
        setOpen(true);
      });
  }
};

export { functResetPass };
