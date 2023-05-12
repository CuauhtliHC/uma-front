import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const getOrdersUser = async (setOrders, idUser) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byUser/${idUser}?statusOrder=PENDING`);
    setOrders(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getOrderEnviando = async (setPendiente, idUser) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byUser/${idUser}?statusOrder=IN_PROGRESS`);
    setPendiente(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getHistoryUser = async (setHistory, idUser) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byUser/${idUser}`);
    setHistory(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { getOrdersUser, getHistoryUser, getOrderEnviando };
