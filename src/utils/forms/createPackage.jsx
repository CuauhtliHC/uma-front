import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functCreatePkg = (formValue) => {
  try {
    axios.post(`${publicUrl}api/package/create`, formValue);
  } catch (error) {
    console.log(error);
  }
};

export { functCreatePkg };
