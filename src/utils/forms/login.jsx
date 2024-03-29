import axios from 'axios';
import Cookies from 'universal-cookie';
import { emailRegex } from './regex.jsx';

const publicUrl = process.env.REACT_APP_URL_BACKEND;
const cookies = new Cookies();

const validate = (email, password) => {
  const errors = {};
  if (!email || email === '') {
    errors.email = 'El campo Email es obligatorio';
  } else if (!emailRegex.test(email)) {
    errors.email = 'El campo Email no es válido';
  }

  if (!password || password === '') {
    errors.password = 'El campo Contraseña es obligatorio';
  }
  return errors;
};

const funcLogin = async (
  email,
  setOpen,
  setMessage,
  password,
  setUser,
  saveState,
  setErrors,
) => {
  const errors = validate(email, password);
  setErrors(errors);

  if (Object.keys(errors).length === 0) {
    try {
      const response = await axios.post(
        `${publicUrl}login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      const user = response.data.payload;
      cookies.set('token', cookies.get('token'), { path: '/' });
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.rol,
        ddjj: user.ddjj,
        token: user.token,
      });
      saveState({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.rol,
        ddjj: user.ddjj,
        token: user.token,
      });
    } catch (error) {
      console.log(error);
      setOpen(false);
      let messageError;
      if (error.response.status === 404 || error.response.status === 400) {
        messageError = error.response.data.msg;
      } else {
        messageError = 'Credenciales incorrectas';
      }
      setMessage({
        description: messageError,
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    }
  }
};

export { funcLogin };
