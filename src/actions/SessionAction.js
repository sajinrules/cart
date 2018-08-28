
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

// export function login(credentials) {
//   return (dispatch) => {
//     return LoginAPI.login(credentials).then(response => {
//       dispatch(setLoginStatus('success'));
//       LoginAPI.setToken(response.token)
//       dispatch(setLoginSuccess(response));
//     }).catch(error => {
//       dispatch(setLoginStatus('error'));
//       throw(error);
//     });
//   };
// }
