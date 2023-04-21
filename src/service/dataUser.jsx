import axios from 'axios';

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

export { functGetDataUserById };
