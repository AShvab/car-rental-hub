import axios from 'axios';

axios.defaults.baseURL = "https://648dd2a42de8d0ea11e841b4.mockapi.io";
export const limit = 8;

export const fetchCars = async page => {
  const { data } = await axios.get(`adverts?p=${page}&l=${limit}`);
  return data;
}