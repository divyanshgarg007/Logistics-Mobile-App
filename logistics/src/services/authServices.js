/* eslint-disable prettier/prettier */
import apiInstance from '../config/api/axios';
// import { getBaseUrl } from '../utilities/utils';

export const login = async (payload) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    };

    const response = await apiInstance.post('users/customer/login_user/', payload, config);
    return response;
};

export const signUp = async (payload) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    };

    const response = await apiInstance.post('users/customer_register/', payload, config);
    return response;
};

export const forgetPassword = async (payload) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
             accept: 'application/json',
        },
    };

    const response = await apiInstance.post('users/reset_password', payload, config);
    return response;
};
