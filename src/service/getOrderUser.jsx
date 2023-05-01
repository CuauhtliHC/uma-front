import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const getOrdersUser = async (setOrders) => {
  try {
    const response = await axios.get(`${publicUrl}orders/?statusOrder=PENDING`);
    setOrders(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getHistoryUser = async (setHistory) => {
  try {
    const response = await axios.get(`${publicUrl}orders/`);
    setHistory(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { getOrdersUser, getHistoryUser };
