import {
  // USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  COMPANY_SIGN_UP_SUCCESS,
  COMPANY_SIGN_UP_FAIL,
  LOGOUT,
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAIL,
  // LOAD_USER,
  // LOAD_USER_ERROR,
} from '../types';
const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  message: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SIGN_UP_SUCCESS:
    case LOGIN_SUCCES:
    case COMPANY_SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        token: action.payloadToken,
        message: null,
      };
    case LOGOUT:
    case LOGIN_FAIL:
    case COMPANY_SIGN_UP_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};
