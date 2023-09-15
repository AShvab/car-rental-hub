import axios from 'axios';

const baseUrl = 'https://648dd2a42de8d0ea11e841b4.mockapi.io/';

export const fetchAllCars = async () => {
  try {
    const response = await axios.get(`${baseUrl}/advert`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const fetchCars = async (page) => {
    try {
      const response = await axios.get(`${baseUrl}/advert?page=${1}&limit=${page * 8}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  };




