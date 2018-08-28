
import * as CONST from '../constants/login.constants';

export function setLoginStatus(data) {
  return {
    type: CONST.SET_LOGIN_STATUS,
    data
  }
}

export function setLoginSuccess(data) {
  return {
    type: CONST.SET_LOGIN_SUCCESS,
    data
  }
}
