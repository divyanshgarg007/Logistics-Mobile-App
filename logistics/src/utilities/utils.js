/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_CONSTANTS } from '../constants/constants';

export const getToken = async key => {
  let data = await AsyncStorage.getItem(key);
  return data;
};

export const setToken = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export function removeToken(key) {
  return localStorage.removeItem(key);
}

// export const getBaseUrl = () => {
//   return `${API_CONSTANTS.BASE_URL}`;
// };
