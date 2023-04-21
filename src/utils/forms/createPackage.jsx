import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functCreatePkg = ({
  address,
  addressee,
  dateOfDelivery,
  quantityOfPackages,
  weight,
}) => {
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
  } catch (error) {
    console.log(error);
  }
};

export { functCreatePkg };
