import axios from 'axios';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export function getToken() {
  return async dispatch => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: value,
        });
      }
    } catch (e) {
      console.log(e);
      dispatch({
        type: GET_TOKEN_FAIL,
      });
    }
  };
}

//!Get profile
export function getProfile(token) {
  return async dispatch => {
    let status = '';
    try {
      const res = await axios(
        `https://test.money-men.kz/api/getProfile?token=${token}`,
      );
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data.data[0],
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PROFILE_FAIL,
      });
    }
  };
}

//! Log-In

export function login(phone, password) {
  return async dispatch => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://test.money-men.kz/api/login',
        data: {
          phone,
          password,
        },
      });
      if (!res.data.success) {
        dispatch({
          type: LOGIN_FAIL,
          payload: 'Неправильный логин или пароль!',
        });
        return;
      }
      console.log('Login data', res.data);
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data.token,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
}

//!Registartion new company

export function companySignup(data) {
  const {fullName, phone, email, password, companyName, companyType, bin} =
    data;
  return async dispatch => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://test.money-men.kz/api/entityRegistration',
        data: {
          fullName,
          phone,
          email,
          password,
          companyName,
          companyType,
          bin,
        },
      });
      if (!res.data.success) {
        dispatch({
          type: COMPANY_SIGN_UP_FAIL,
          payload: 'Проверьте правильность ввода данных для регистрации!',
        });
        return;
      }
      const token = await AsyncStorage.setItem('token', res.data.token);
      dispatch({
        type: COMPANY_SIGN_UP_SUCCESS,
        payload: res.data,
        payloadToken: token,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: COMPANY_SIGN_UP_FAIL,
      });
    }
  };
}
export function personSignup(data) {
  const {fullName, phone, email, password} = data;
  return async dispatch => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://test.money-men.kz/api/registration',
        data: {
          fullName,
          phone,
          email,
          password,
        },
      });
      if (!res.data.success) {
        dispatch({
          type: PERSON_SIGN_UP_FAIL,
          payload: 'Проверьте правильность ввода данных для регистрации!',
        });
        return;
      }
      const token = await AsyncStorage.setItem('token', res.data.token);
      dispatch({
        type: PERSON_SIGN_UP_SUCCESS,
        payload: res.data,
        payloadToken: token,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: PERSON_SIGN_UP_FAIL,
      });
    }
  };
}

//!Logout
export function Logout() {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch({
        type: LOGOUT,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGOUT,
      });
    }
  };
}
