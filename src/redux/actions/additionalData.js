import {
  GET_COMPANY_TYPES_SUCCESS,
  GET_COMPANY_TYPES_FAIL,
  GET_PAYMENT_TYPES_SUCCESS,
  GET_PAYMENT_TYPES_FAIL,
  GET_CURRENCY_TYPES_SUCCESS,
  GET_CURRENCY_TYPES_FAIL,
  GET_TRANSPORT_TYPES_SUCCESS,
  GET_TRANSPORT_TYPES_FAIL,
  GET_TRANSPORT_SUB_TYPES_SUCCESS,
  GET_TRANSPORT_SUB_TYPES_FAIL,
  GET_DOCUMENTS_SUCCESS,
  GET_DOCUMENTS_FAIL,
  GET_LOADING_CONDITIONS_SUCCESS,
  GET_LOADING_CONDITIONS_FAIL,
  GET_TRANSPORT_CONDITIONS_SUCCESS,
  GET_TRANSPORT_CONDITIONS_FAIL,
  GET_FREIGHT_CONDITIONS_SUCCESS,
  GET_FREIGHT_CONDITIONS_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_FIRE_SISTEM_SUCCESS,
  GET_FIRE_SISTEM_FAIL,
  GET_VENTILATION_SUCCESS,
  GET_VENTILATION_FAIL,
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

//!Payment
export function getPaymentTypes() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getPaymentType',
      );
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
//!Transport-Sub-Types
export function getTransportSubTypes(id) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://test.money-men.kz/api/getTypeSubTransport?category_id=${id}`,
      );
      dispatch({
        type: GET_TRANSPORT_SUB_TYPES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_TRANSPORT_SUB_TYPES_FAIL,
      });
    }
  };
}

//! Get Documents
export function getDocuments() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/postDocuments',
      );
      dispatch({
        type: GET_DOCUMENTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_DOCUMENTS_FAIL,
      });
    }
  };
}

//! Get Loading Conditions
export function getLoadingConditions() {
  return async dispatch => {
    try {
      const res = await axios.get('https://test.money-men.kz/api/postLoading');
      dispatch({
        type: GET_LOADING_CONDITIONS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_LOADING_CONDITIONS_FAIL,
      });
    }
  };
}
//! Get Transport Conditions
export function getTransportConditions() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/postCondition',
      );
      dispatch({
        type: GET_TRANSPORT_CONDITIONS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_TRANSPORT_CONDITIONS_FAIL,
      });
    }
  };
}
//! Get Freight Conditions
export function getFreightConditions() {
  return async dispatch => {
    try {
      const res = await axios.get('https://test.money-men.kz/api/postAddition');
      dispatch({
        type: GET_FREIGHT_CONDITIONS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FREIGHT_CONDITIONS_FAIL,
      });
    }
  };
}
//! Get Freight Conditions
export function getAllCountries() {
  return async dispatch => {
    try {
      const res = await axios.get('https://test.money-men.kz/api/country');
      dispatch({
        type: GET_ALL_COUNTRIES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ALL_COUNTRIES_FAIL,
      });
    }
  };
}
//! Get FireSistem
export function getFireSystem() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getFireSystem',
      );
      dispatch({
        type: GET_FIRE_SISTEM_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FIRE_SISTEM_FAIL,
      });
    }
  };
}
//! Get Ventilation
export function getVentilation() {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://test.money-men.kz/api/getVentilation',
      );
      dispatch({
        type: GET_VENTILATION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_VENTILATION_FAIL,
      });
    }
  };
}
