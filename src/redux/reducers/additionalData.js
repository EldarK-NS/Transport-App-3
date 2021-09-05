import {
  GET_COMPANY_TYPES_SUCCESS,
  GET_COMPANY_TYPES_FAIL,
  GET_ALL_COUNTRIES_SUCCESS,
  GET_ALL_COUNTRIES_FAIL,
  GET_CITIES_BY_COUNTRY_ID_SUCCESS,
  GET_CITIES_BY_COUNTRY_ID_FAIL,
} from '../types';
const initialState = {
  loading: true,
  companyTypes: [],
  allCountries: [],
  cities: [],
};

export const helpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        companyTypes: action.payload,
      };
    case GET_COMPANY_TYPES_FAIL:
      return {
        state,
        loading: true,
      };
    default:
      return state;
  }
};
