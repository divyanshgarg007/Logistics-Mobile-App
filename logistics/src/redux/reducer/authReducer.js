/* eslint-disable prettier/prettier */
import { AUTH_ACTION_TYPES } from '../action/actionsType';

const initialState = {
    signIn: {
        loading: false,
        data: null,
        error: null,
    },
    signUp: {
        loading: false,
        data: null,
        error: null,
    },
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTH_ACTION_TYPES.LOGIN_REQUEST:
            return {
                ...state,
                signIn: {
                    ...state.signIn,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                signIn: {
                    ...state.signIn,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case AUTH_ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                signIn: {
                    ...state.signIn,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
            case AUTH_ACTION_TYPES.SIGNUP_REQUEST:
                return {
                    ...state,
                    signUp: {
                        ...state.signUp,
                        data: null,
                        loading: true,
                        error: null,
                    },
                };
            case AUTH_ACTION_TYPES.SIGNUP_SUCCESS:
                return {
                    ...state,
                    signUp: {
                        ...state.signUp,
                        data: action.payload,
                        loading: false,
                        error: null,
                    },
                };
            case AUTH_ACTION_TYPES.SIGNUP_FAILURE:
                return {
                    ...state,
                    signUp: {
                        ...state.signUp,
                        data: null,
                        loading: false,
                        error: action.payload,
                    },
                };
            case AUTH_ACTION_TYPES.TOAST_CLEANUP:
            return {
                ...state,
                signIn: {
                    ...state.signIn,
                    data: state.signIn.data,
                    loading: true,
                    error: null,
                },
            };
        default:
            return state;
    }
};

export default authReducer;
