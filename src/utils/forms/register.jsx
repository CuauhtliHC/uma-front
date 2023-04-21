import axios from 'axios';
import { emailRegex, passwordRegex } from './regex.jsx';

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

const funcRegister = async (
  setErrors,
  email,
  setOpen,
  setMessage,
  userName,
  password,
  passwordConfirm,
  navigate,
) => {
  const publicUrl = process.env.REACT_APP_URL_BACKEND;
  const VerificateForm = validate(email, userName, password, passwordConfirm);
  setErrors(VerificateForm);
  if (Object.keys(VerificateForm).length === 0) {
    try {
      const response = await axios.post(
        `${publicUrl}users/register`,
        {
          name: userName,
          email,
          password,
        },
      );
      if (response.data.error) {
        setOpen(false);
        setMessage({
          description: response.data.message,
          title: 'Error',
          status: 'error',
        });
        setOpen(true);
      } else {
        setOpen(false);
        setMessage({
          description: 'Se ha registrado la cuenta',
          title: 'Éxito',
          status: 'success',
        });
        setOpen(true);
        setTimeout(() => navigate('/login'), 1000);
      }
    } catch (error) {
      setOpen(false);
      let messageError;
      // eslint-disable-next-line max-len
      if (error.response.data.errors[0].value === email) messageError = error.response.data.errors[0].msg;
      setMessage({
        description: messageError,
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    }
  }
};

export { funcRegister };
