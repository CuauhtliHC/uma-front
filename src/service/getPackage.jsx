import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functGetPackageForUser = async (setData) => {
  try {
    const response = await axios.get(`${publicUrl}package/today`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: localStorage.getItem('token'),
      },
    });
    setData(response.data.datePackageToday);
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (list) => {
  try {
    axios.post(
      `${publicUrl}orders/create/`,
      {
        list,
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          token: localStorage.getItem('token'),
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export { functGetPackageForUser, createOrder };
