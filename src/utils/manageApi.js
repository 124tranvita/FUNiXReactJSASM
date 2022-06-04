import axios from 'axios';

const manageApi = axios.create({
  baseURL: 'https://nezumi-api.herokuapp.com/',
});

export const getStaffs = async () => {
  try {
    const response = await manageApi.get('/staffs');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDepartments = async () => {
  try {
    const response = await manageApi.get('/departments');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default manageApi;
