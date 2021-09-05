import {combineReducers} from 'redux';
import {helpDataReducer} from './additionalData';
import {authReducer} from './auth';

export const rootReducer = combineReducers({
  auth: authReducer,
  additionalData: helpDataReducer,
});
