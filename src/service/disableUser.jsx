import axios from 'axios';

const funcDisableUserById = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/users/deleteMyUser/${id}`,
    );
    // localStorage.removeItem('User');
    // localStorage.removeItem('token');
    localStorage.clear();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { funcDisableUserById };
