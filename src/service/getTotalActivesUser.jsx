import axios from 'axios';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

axios.defaults.withCredentials = true;

const functGetTotalUserActivesInactives = async (
  setTotalUser,
  setTotalUserActives,
  setPercentageUser,
) => {
  try {
    const response = await axios.get(
      `${publicUrl}users/getUsersActivesInactives`,
    );
    setTotalUser(response.data.userTotal);
    setTotalUserActives(response.data.userActives);
    setPercentageUser(response.data.percentage);
  } catch (error) {
    console.log(error);
  }
};

export { functGetTotalUserActivesInactives };
