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
const initialState = {
  loading: true,
  companyTypes: [],
  paymentTypes: [],
  currencyTypes: [],
  transportTypes: [],
  transportSubTypes: [],
  documents: [],
  loadingCond: [],
  transportCond: [],
  freightCond: [],
  countries: [],
  fireSistem: [],
  ventilation: [],
};

export const helpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        companyTypes: action.payload,
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
    case GET_TRANSPORT_SUB_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        transportSubTypes: action.payload,
      };
    case GET_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        documents: action.payload,
      };
    case GET_LOADING_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingCond: action.payload,
      };
    case GET_TRANSPORT_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transportCond: action.payload,
      };
    case GET_FREIGHT_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        freightCond: action.payload,
      };
    case GET_ALL_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case GET_FIRE_SISTEM_SUCCESS:
      return {
        ...state,
        loading: false,
        fireSistem: action.payload,
      };
    case GET_VENTILATION_SUCCESS:
      return {
        ...state,
        loading: false,
        ventilation: action.payload,
      };
    case GET_COMPANY_TYPES_FAIL:
    case GET_PAYMENT_TYPES_FAIL:
    case GET_CURRENCY_TYPES_FAIL:
    case GET_TRANSPORT_TYPES_FAIL:
    case GET_TRANSPORT_SUB_TYPES_FAIL:
    case GET_DOCUMENTS_FAIL:
    case GET_LOADING_CONDITIONS_FAIL:
    case GET_TRANSPORT_CONDITIONS_FAIL:
    case GET_FREIGHT_CONDITIONS_FAIL:
    case GET_ALL_COUNTRIES_FAIL:
    case GET_FIRE_SISTEM_FAIL:
    case GET_VENTILATION_FAIL:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
