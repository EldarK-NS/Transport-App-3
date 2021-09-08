import axios from 'axios';

import {
  GET_FILTERED_CARGO_POSTS_SUCCESS,
  GET_FILTERED_CARGO_POSTS_FAIL,
} from '../types';

export function getFilteredCargoPosts(data) {
  // const {} = data;
  console.log(data);
  return async dispatch => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://test.money-men.kz/api/filterPost?from&to&volume_start&volume_end&net_start&net_end&start&end&quantity_start&quantity_end&width_start&width_end&length_start&length_end&height_start&height_end&type_transport',
        data: {
          from,
          to,
          volume_start,
          volume_end,
          net_start,
          net_end,
          start,
          end,
          quantity_start,
          quantity_end,
          width_start,
          width_end,
          length_start,
          length_end,
          height_start,
          height_end,
          type_transport,
        },
      });
      console.log('FROM REDUX: ', res.data);
      dispatch({
        type: GET_FILTERED_CARGO_POSTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FILTERED_CARGO_POSTS_FAIL,
      });
    }
  };
}
