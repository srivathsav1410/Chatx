import axios from 'axios';

export const loginAPI = async (credentials) => {
  try {
    console.log("loginAPI", credentials)
    const response = await axios.post('https://localhost:7271/api/User/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // assuming response contains user data
  } catch (error) {
    // Re-throw a readable error message
      throw new Error('Login failed. Please try again.');
    
  }
};
