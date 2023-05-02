import axios from 'axios';
import statusUsers from '../utils/statusUser.json';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const functGetDataUserById = async (id, setDataUser) => {
  try {
    const user = await axios.get(`${publicUrl}users/getUserById/${id}`);
    setDataUser(user.data);
  } catch (error) {
    console.log(error);
  }
};

const statusUser = (status) => {
  return statusUsers.status[status];
};

export { functGetDataUserById, statusUser };
