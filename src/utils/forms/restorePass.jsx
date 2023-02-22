import { emailRegex } from './regex.jsx';
import usuariosFake from '../../statics/DummyData/usuariosFake';

const validate = (email) => {
  const errores = {};
  if (!email || email === '') {
    errores.email = 'El campo Email es obligatorio';
  } else if (!emailRegex.test(email)) {
    errores.email = 'El campo Email no es válido';
  }
  return errores;
};

const funcRestorePass = (setErrors, setOpen, setMessage, email) => {
  const dataEmails = usuariosFake.map((dataUser) => dataUser.email);
  const VerificateForm = validate(email);
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
  ) {
    setOpen(false);
    setMessage({
      description: `Se envio un correo a ${email}`,
      title: 'Exito',
      status: 'success',
    });
    setOpen(true);
  }
};

export { funcRestorePass };
