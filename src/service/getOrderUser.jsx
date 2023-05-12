import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const getOrdersUser = async (setOrders, idUser) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byUser/${idUser}?statusOrder=PENDING`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: localStorage.getItem('token'),
      },
    });
    setOrders(response.data);
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

export { getOrdersUser, getHistoryUser };
