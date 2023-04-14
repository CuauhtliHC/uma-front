import axios from 'axios';
import repartidoresFake from '../statics/DummyData/repartidoresFake';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functGetDistributors = async (showCount, setDataUsers) => {
  try {
    const response = await axios.get(`${publicUrl}users/getAllUsers/${showCount}`);
    setDataUsers(response.data);
  } catch (error) {
    console.log(error);
  }
};

const functionAddDataDistributors = (dataUsers, showCount) => {
  return dataUsers.slice(0, showCount).map((data, i) => {
    const { status, percentage } = repartidoresFake[i];
    return { ...data, status, percentage };
  });
};

export { functGetDistributors, functionAddDataDistributors };
