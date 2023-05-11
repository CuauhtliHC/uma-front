import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const functGetTotalUserActivesInactives = async (
  setTotalUser,
  setTotalUserActives,
  setPercentageUser,
) => {
  try {
    const response = await axios.get(`${publicUrl}users/getUsersActivesInactives`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        token: localStorage.getItem('token'),
      },
    });
    setTotalUser(response.data.userTotal);
    setTotalUserActives(response.data.userActives);
    setPercentageUser(response.data.percentage);
  } catch (error) {
    console.log(error);
  }
};

export { functGetTotalUserActivesInactives };
