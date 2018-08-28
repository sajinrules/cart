import * as CONST from '../constants/login.constants';
import LoginAPI from '../helpers/login.api';

export function setLoginStatus(data) {
  return {
    type: CONST.SET_LOGIN_STATUS,
    data
  }
}

// export function setLoginSuccess(data) {
//   return {
//     type: CONST.SET_LOGIN_SUCCESS,
//     data
//   }
// }
// export function setStatus(status){
//
// }

export function login(credentials) {
  return (dispatch) => {
    return LoginAPI.login(credentials)
  };
}
