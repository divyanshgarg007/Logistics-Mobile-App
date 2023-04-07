/* eslint-disable prettier/prettier */
import axios from 'axios';
import { getToken } from '../../utilities/utils';
import { API_CONSTANTS } from '../../constants/constants';

const apiInstance = axios.create({
  baseURL: 'http://43.205.95.178/',
});

apiInstance.interceptors.request.use(async config => {
  let token;
  await getToken('token').then(data => { token = data; });
  config.headers.Authorization = (token && token !== undefined) ? `Bearer ${token}` : '';
  return config;
});

apiInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default apiInstance;
