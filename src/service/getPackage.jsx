import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const functGetPackageForUser = async (setData) => {
  try {
    const response = await axios.get(`${publicUrl}package/today`);
    setData(response.data.datePackageToday);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (list) => {
  try {
    axios.post(`${publicUrl}orders/create/`, {
      list,
    });
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
