
import * as CONST from '../constants/login.constants';
import LoginAPI from '../helpers/login.api';

export function setLoginStatus(status) {
  return {
    type: CONST.SET_LOGIN_STATUS,
    status
  }
}

export function setLoginSuccess(data) {
  return {
    type: CONST.SET_LOGIN_SUCCESS,
    data
  }
}

export function login(credentials) {
  return (dispatch) => {
    return LoginAPI.login(credentials).then(response => {
      dispatch(setLoginStatus('success'));
      LoginAPI.setToken(response.token)
      dispatch(setLoginSuccess(response));
    }).catch(error => {
      dispatch(setLoginStatus('error'));
      throw(error);
    });
  };
}
