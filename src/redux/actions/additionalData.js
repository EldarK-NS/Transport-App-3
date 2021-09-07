import {
  GET_COMPANY_TYPES_SUCCESS,
  GET_COMPANY_TYPES_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_CITIES_BY_COUNTRY_ID_SUCCESS,
  GET_CITIES_BY_COUNTRY_ID_FAIL,
  GET_PAYMENT_TYPES_SUCCESS,
  GET_PAYMENT_TYPES_FAIL,
  GET_CURRENCY_TYPES_SUCCESS,
  GET_CURRENCY_TYPES_FAIL,
  GET_TRANSPORT_TYPES_SUCCESS,
  GET_TRANSPORT_TYPES_FAIL,
} from '../types';
import axios from 'axios';

export function getCompanyTypes() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getCompanyTypes',
      );

      dispatch({
        type: GET_COMPANY_TYPES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_COMPANY_TYPES_FAIL,
      });
    }
  };
}

//!Countries
// export function getAllCountries() {
//   return async dispatch => {
//     try {
//       const res = await axios.get('http://test.money-men.kz/api/country');
//       console.log('res-Country', res.data);
//       dispatch({
//         type: GET_ALL_COUNTRIES_SUCCESS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: GET_ALL_COUNTRIES_FAIL,
//       });
//     }
//   };
// }

//!Payment
export function getPaymentTypes() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getPaymentType',
      );
      console.log('res-Payments', res.data);
      dispatch({
        type: GET_PAYMENT_TYPES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PAYMENT_TYPES_FAIL,
      });
    }
  };
}
//!Currency
export function getCurrencyTypes() {
  return async dispatch => {
    try {
      const res = await axios.get('https://test.money-men.kz/api/getCurrency');
      console.log('res-Currency', res.data);
      dispatch({
        type: GET_CURRENCY_TYPES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_CURRENCY_TYPES_FAIL,
      });
    }
  };
}
//!Transport-Types
export function getTransportTypes() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getTypeTransport',
      );
      dispatch({
        type: GET_TRANSPORT_TYPES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_TRANSPORT_TYPES_FAIL,
      });
    }
  };
}
