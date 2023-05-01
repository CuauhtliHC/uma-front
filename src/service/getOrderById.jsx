import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const getOrderById = async (id, setOrder) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byId/${id}`);
    setOrder(response.data.order);
  } catch (error) {
    console.log(error);
  }
};

export { getOrderById };
