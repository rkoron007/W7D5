export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import * as API from '../util/session_api_util';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  API.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => (dispatch) => (
  API.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => (dispatch) => (
  API.signup(user)
    .then( (newUser) => dispatch(receiveCurrentUser(newUser)))
);
