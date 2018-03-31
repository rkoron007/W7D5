import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session_errors_reducer';
import { errorsReducer } from './errors_reducer';

export const combineReducer = () => ({
  session: sessionErrorsReducer,
  errors: errorsReducer
});
