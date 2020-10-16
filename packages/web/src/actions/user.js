import api from '../services/api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('authenticated');
    dispatch(receiveLogout());
  };
}

export function loginUser(credentials, history) {
  return async dispatch => {
    try {
      await api.post('/sessions', credentials);

      dispatch(receiveLogin());

      localStorage.setItem('authenticated', true);

      history.push('/app');
    } catch {
      dispatch(loginError('E-mail ou senha incorretos.'));
    }
  };
}
