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
    console.log(response);
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

const finishOrder = async (id, status) => {
  try {
    axios.put(`${publicUrl}orders/status/${status}/${id}/`);
  } catch (error) {
    console.log(error);
  }
};

const deleteOrderOrPkg = async (id, inProgress) => {
  let url = 'package/';
  if (inProgress) url = 'orders/delete/';
  try {
    axios.delete(`${publicUrl}${url}${id}`);
  } catch (error) {
    console.log(error);
  }
};

export {
  functGetPackageForUser, createOrder, deleteOrderOrPkg, finishOrder,
};
