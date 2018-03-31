import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    RECEIVE_SESSION_ERRORS
  } from '../actions/sessions_actions';

  import { combineReducers } from 'redux';

  import sessionErrorsReducer from './session_errors_reducer';

  const errorsReducer = combineReducers({
    session: sessionErrorsReducer
  });

  export default errorsReducer;
