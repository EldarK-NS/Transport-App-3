import {
  GET_COMPANY_TYPES_SUCCESS,
  GET_COMPANY_TYPES_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  // GET_CITIES_BY_COUNTRY_ID_SUCCESS,
  // GET_CITIES_BY_COUNTRY_ID_FAIL,
  GET_PAYMENT_TYPES_SUCCESS,
  GET_PAYMENT_TYPES_FAIL,
  GET_CURRENCY_TYPES_SUCCESS,
  GET_CURRENCY_TYPES_FAIL,
  GET_TRANSPORT_TYPES_SUCCESS,
  GET_TRANSPORT_TYPES_FAIL,
} from '../types';
const initialState = {
  loading: true,
  companyTypes: [],
  allCountries: [],
  cities: [],
  paymentTypes: [],
  currencyTypes: [],
  transportTypes: [],
};

export const helpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        companyTypes: action.payload,
      };
    case GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        allCountries: action.payload,
      };
    case GET_PAYMENT_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentTypes: action.payload,
      };
    case GET_CURRENCY_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        currencyTypes: action.payload,
      };
    case GET_TRANSPORT_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        transportTypes: action.payload,
      };
    case GET_ALL_COUNTRIES_FAIL:
    case GET_COMPANY_TYPES_FAIL:
    case GET_PAYMENT_TYPES_FAIL:
    case GET_CURRENCY_TYPES_FAIL:
    case GET_TRANSPORT_TYPES_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
