import {ADD_CARGO_POSTS_SUCCESS, ADD_CARGO_POSTS_FAIL} from '../types';

const initialState = {
  loading: true,
  cargoPost: [],
  error: false,
};

export const addPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARGO_POSTS_SUCCESS:
      return {
        ...state,
        cargoPost: action.payload,
        loading: false,
        error: false,
      };
    case ADD_CARGO_POSTS_FAIL:
      return {
        ...state,
        cargoPost: null,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
