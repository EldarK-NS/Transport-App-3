import {
  // USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  COMPANY_SIGN_UP_SUCCESS,
  COMPANY_SIGN_UP_FAIL,
  PERSON_SIGN_UP_SUCCESS,
  PERSON_SIGN_UP_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAIL,
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
    case LOGIN_SUCCES:
    case COMPANY_SIGN_UP_SUCCESS:
    case PERSON_SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        message: null,
        token: action.payload,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
    case LOGIN_FAIL:
    case GET_TOKEN_FAIL:
    case GET_PROFILE_FAIL:
    case COMPANY_SIGN_UP_FAIL:
    case PERSON_SIGN_UP_FAIL:
    case GET_TOKEN_FAIL:
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
