import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const getOrderById = async (id, setOrder) => {
  try {
    const response = await axios.get(`${publicUrl}orders/byId/${id}`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: localStorage.getItem('token'),
      },
    });
    setOrder(response.data.order);
  } catch (error) {
    console.log(error);
  }
};

export { getOrderById };
