import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functCreatePkg = (
  {
    address, addressee, dateOfDelivery, quantityOfPackages, weight,
  },
  setOpen,
  setMessage,
) => {
  const quantity = parseInt(quantityOfPackages, 10);
  const weightFloat = parseFloat(weight);
  try {
    axios.post(`${publicUrl}package/create`, {
      address,
      addresses: addressee,
      dateOfDelivery,
      quantityOfPackages: quantity,
      weight: weightFloat,
    });
    setOpen(false);
    setMessage({
      description: 'Se a creado correctamente el paquete',
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
};

export { functCreatePkg };
