import axios from 'axios';

import {
  GET_FILTERED_CARGO_POSTS_SUCCESS,
  GET_FILTERED_CARGO_POSTS_FAIL,
} from '../types';

export function getFilteredCargoPosts() {
  return async dispatch => {
    try {
      const res = await axios(
        'https://test.money-men.kz/api/filterPost?from&to&volume_start&volume_end&net_start&net_end&start&end&quantity_start&quantity_end&width_start&width_end&length_start&length_end&height_start&height_end&type_transport',
      );
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FILTERED_CARGO_POSTS_FAIL,
      });
    }
  };
}
