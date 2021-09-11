import {combineReducers} from 'redux';
import {helpDataReducer} from './additionalData';
import {addPostsReducer} from './addPosts';
import {authReducer} from './auth';
import {filteredDataReducer} from './filteredData';
import {transitStoreReducer} from './transitStore';

export const rootReducer = combineReducers({
  auth: authReducer,
  additionalData: helpDataReducer,
  filderedData: filteredDataReducer,
  addedPosts: addPostsReducer,
  transitData: transitStoreReducer,
});
