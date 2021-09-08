import {combineReducers} from 'redux';
import {helpDataReducer} from './additionalData';
import {authReducer} from './auth';
import {filteredDataReducer} from './filteredData';

export const rootReducer = combineReducers({
  auth: authReducer,
  additionalData: helpDataReducer,
  filderedData: filteredDataReducer,
});
