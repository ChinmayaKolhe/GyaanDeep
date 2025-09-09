// utils/uploadImage.js
import axiosInstance from './axiosInstance'; // Make sure this import is correct

const uploadImage = async (imageFile) => {
  try {
    console.log('Base URL:', axiosInstance.defaults.baseURL);
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await axiosInstance.post('/api/auth/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Image upload failed:', error);
    throw error;
  }
};

export default uploadImage;