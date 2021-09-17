import {
  GET_ALL_CARGO_FAVORITES_SUCCESS,
  GET_ALL_CARGO_FAVORITES_FAIL,
} from '../types';
import axios from 'axios';

export function getAllFavoritesCargoPosts(token) {
  return async dispatch => {
    console.log('token in redux', token);
    try {
      const res = await axios(
        `https://test.money-men.kz/api/getListPostFavourites?token=${token}`,
      );
      console.log('REDUX', res.data);
      if (res.data.success === true) {
        dispatch({
          type: GET_ALL_CARGO_FAVORITES_SUCCESS,
          payload: res.data.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ALL_CARGO_FAVORITES_FAIL,
      });
    }
  };
}
