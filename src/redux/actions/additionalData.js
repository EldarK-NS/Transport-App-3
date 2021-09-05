import {
  GET_COMPANY_TYPES_SUCCESS,
  GET_COMPANY_TYPES_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_CITIES_BY_COUNTRY_ID_SUCCESS,
  GET_CITIES_BY_COUNTRY_ID_FAIL,
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
