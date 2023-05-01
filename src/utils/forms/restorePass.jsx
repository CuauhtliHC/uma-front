import axios from 'axios';
import { emailRegex } from './regex.jsx';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const validate = (email) => {
  const errores = {};
  if (!email || email === '') {
    errores.email = 'El campo Email es obligatorio';
  } else if (!emailRegex.test(email)) {
    errores.email = 'El campo Email no es válido';
  }
  return errores;
};

const funcRestorePass = async (setErrors, setOpen, setMessage, email) => {
  const VerificateForm = validate(email);
  setErrors(VerificateForm);
  if (Object.keys(VerificateForm).length === 0) {
    try {
      const response = await axios.put(`${publicUrl}users/forgotPassword`, { email });
      console.log(response);
      setOpen(false);
      setMessage({
        description: `Se envio un correo a ${email}`,
        title: 'Exito',
        status: 'success',
      });
      setOpen(true);
    } catch (error) {
      const { errors } = error.response.data;
      setOpen(false);
      setMessage({
        description: errors[0].msg,
        title: 'Error',
        status: 'error',
      });
      setOpen(true);
    }
  }
};

export { funcRestorePass };
