import axios from 'axios';

export const loginAPI = async (credentials) => {
  try {
    console.log("loginAPI", credentials)
    const response = await axios.post('https://localhost:7271/api/User/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (error) {
      throw new Error('Login failed. Please try again.');
    
  }
};
export const getUsers = async (credentials) => {
  try {
    const response = await axios.get(`https://localhost:7271/api/FriendRequest/getSearch?userName=${credentials}`);
    return response.data; 
    } catch (error) {
      throw new Error('Login Failed'); 
  }
};


