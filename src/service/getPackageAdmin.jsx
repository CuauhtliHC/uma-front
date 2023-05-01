import axios from 'axios';
import statusOrders from '../utils/statusOrders.json';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const funcGetAllPackageDay = async (day, setData) => {
  try {
    const response = await axios.get(
      `${publicUrl}ordersAndPackages/all/${day}`,
    );
    setData(response.data);
  } catch (error) {
    console.log(error);
  }
};

const funcGetStatus = (pkg) => {
  return pkg.InProgressOrder ? statusOrders.status[pkg.InProgressOrder.status] : 'Pendiente';
};

export { funcGetAllPackageDay, funcGetStatus };
