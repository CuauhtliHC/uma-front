import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const functGetDistributors = async (showCount, setDataUsers) => {
  try {
    const response = await axios.get(`${publicUrl}users/getAllUsers/${showCount}`);
    setDataUsers(response.data);
  } catch (error) {
    console.log(error);
  }
};

const functionAddDataDistributors = (dataUsers, showCount) => {
  const statusArray = ['Finalizó', 'Viaje en curso', 'Inactivo'];
  return dataUsers.slice(0, showCount).map((data) => {
    return { ...data, status: statusArray[data.StatusUserId - 1] };
  });
};

export { functGetDistributors, functionAddDataDistributors };
