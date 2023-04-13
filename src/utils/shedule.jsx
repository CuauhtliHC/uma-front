import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functGetTotalPackage = async (day, setTotal, setTotalSent, setPercentage) => {
  try {
    const response = await axios.get(
      `${publicUrl}package/descriptionDay/${day}`,
    );
    setTotal(response.data.orders.total);
    setTotalSent(response.data.orders.totalSent);
    setPercentage(response.data.orders.percentage);
  } catch (error) {
    console.log(error);
  }
};

export { functGetTotalPackage };
