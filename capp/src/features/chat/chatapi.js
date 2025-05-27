import axios from 'axios';

export const getFriendsAPI = async (credentials) => {
  try {
    const response = await axios.get(`https://localhost:7271/api/FriendRequest/getall?userId=${credentials.userId}`);
    return response.data; 
    } catch (error) {
      throw new Error('Some Error. Please try again.');
    
  }
};
export const getMessagesAPI = async (credentials) => {
  console.log("getMessagesAPI")
  try {

    const response = await axios.get(`https://localhost:7271/api/Message/messageslist?senderId=${credentials.userId}&receiverId=${credentials.friendId}`);
    return response.data; 
    } catch (error) {
      throw new Error('Some Error. Please try again.'); 
  }
};
export const SendMessageAPI = async (credentials) => {
  try {
    const response = await axios.post('https://localhost:7271/api/Message/send', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // assuming response contains user data
  } catch (error) {
    // Re-throw a readable error message
      throw new Error('Login failed. Please try again.');
    
  }
}
export const sendImageAPI = async (credentials) => {
  try {
    console.log("sendImageAPI", credentials)

    const response = await axios.post(`https://localhost:7271/api/User/uploadimage?userId=${credentials.userId}`, credentials.formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
    } catch (error) {
      throw new Error('Login failed. Please try again.');
    
  }
};