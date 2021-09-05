import axios from 'axios';
import {
  USER_LOADED,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOAD_USER,
  LOAD_USER_ERROR,
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
