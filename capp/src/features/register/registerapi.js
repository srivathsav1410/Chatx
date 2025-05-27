import axios from 'axios';

export const RegisterAPI = async (credentials) => {
  try {
    console.log("loginAPI", credentials)
    const response = await axios.post('https://localhost:7271/api/User/register', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; 
  } catch (error) {
      throw new Error('Login failed. Please try again.');
    
  }
};