import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    RECEIVE_SESSION_ERRORS
  } from '../actions/sessions_actions';

export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { errors: []});
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, { errors: action.errors });
    default:
      return state;
  }
};
