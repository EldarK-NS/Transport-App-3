import axios from 'axios';
import {
  // USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  COMPANY_SIGN_UP_SUCCESS,
  COMPANY_SIGN_UP_FAIL,
  // LOGOUT,
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAIL,
  // LOAD_USER,
  // LOAD_USER_ERROR,
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async token => {
  try {
    const value = await AsyncStorage.getItem('blizToken');
    if (value !== null) {
      console.log(value);
    } else console.log('no token');
  } catch (e) {
    console.log(e);
  }
};

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
      const token = await AsyncStorage.setItem('blizToken', res.data.token);
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data,
        payloadToken: token,
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
      console.log('1', res.data.token);
      console.log('2', res.data);
      console.log('3', res);
      if (!res.data.success) {
        dispatch({
          type: COMPANY_SIGN_UP_FAIL,
          payload: 'Проверьте правильность ввода данных для регистрации!',
        });
        return;
      }
      const token = await AsyncStorage.setItem('blizToken', res.data.token);
      dispatch({
        type: COMPANY_SIGN_UP_SUCCESS,
        payload: res.data,
        payloadToken: token,
      });
    } catch (error) {
      console.log('Error-Redux', error);
      dispatch({
        type: COMPANY_SIGN_UP_FAIL,
      });
    }
  };
}
