import {
  GET_FILTERED_CARGO_POSTS_SUCCESS,
  GET_FILTERED_CARGO_POSTS_FAIL,
} from '../types';

const initialState = {
  loading: true,
  filteredCargoPosts: [],
};

export const filteredDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_CARGO_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredCargoPosts: action.payload,
      };
    case GET_FILTERED_CARGO_POSTS_FAIL:
      return {
        ...state,
        loading: true,
        filteredCargoPosts: null,
      };
    default:
      return state;
  }
};
