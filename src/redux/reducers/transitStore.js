import {
  SAVE_START_END_PLACES,
  SAVE_CARGO_POST_ADDITIONAL_DATA,
  REMOVE_TRANSIT_DATA,
} from '../types';

const initialState = {
  startPlaceCargo: null,
  endPlaceCargo: null,
  additionalCargoPost: null,
};

export const transitStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_START_END_PLACES:
      return {
        ...state,
        startPlaceCargo: action.payload1,
        endPlaceCargo: action.payload2,
      };
    case SAVE_CARGO_POST_ADDITIONAL_DATA:
      return {
        ...state,
        additionalCargoPost: action.payload,
      };
    case REMOVE_TRANSIT_DATA:
      return {
        ...state,
        startPlaceCargo: null,
        endPlaceCargo: null,
        additionalCargoPost: null,
      };

    default:
      return state;
  }
};
