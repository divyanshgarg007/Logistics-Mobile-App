/* eslint-disable prettier/prettier */
import { AUTH_ACTION_TYPES } from './actionsType';
import * as authServices from '../../services/authServices';
import { setToken } from '../../utilities/utils';

const loginRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_REQUEST,
  };
};

const loginSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
    payload: data,
  };
};

const loginFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_FAILURE,
    payload: error,
  };
};

export const loginAction = data => async dispatch => {
  dispatch(loginRequest());
  try {
    const responseData = await authServices.login(data);
    if (responseData?.status === 200) {
      dispatch(loginSuccess(responseData));
      console.log('responseData?.data?.token', responseData);
      setToken('token', responseData?.data?.token);
    } else {
      dispatch(loginFailure(responseData?.errors));
    }
  } catch (error) {
    dispatch(loginFailure(error?.response?.data));
  }
};

/// cleanup
const loginErrorRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.TOAST_CLEANUP,
  };
};
export const loginErrorAction = () => async dispatch => {
  dispatch(loginErrorRequest());
};

const signupRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.SIGNUP_REQUEST,
  };
};

const signupSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.SIGNUP_SUCCESS,
    payload: data,
  };
};

const signupFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.SIGNUP_FAILURE,
    payload: error,
  };
};

export const signupAction = data => async dispatch => {
  dispatch(signupRequest());
  try {
    const responseData = await authServices.signUp(data);
    if (responseData?.status === 200) {
      dispatch(signupSuccess(responseData));
      setToken('token', responseData?.data?.token);
    } else {
      dispatch(signupFailure(responseData?.errors));
    }
  } catch (error) {
    dispatch(signupFailure(error?.response?.data));
  }
};

//USER LOGOUT ACTION
export const logoutAction = () => {
  return {
    type: AUTH_ACTION_TYPES.USER_LOGGED_OUT,
    payload: undefined,
  };
};