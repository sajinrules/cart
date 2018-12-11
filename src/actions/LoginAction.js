import * as CONST from '../constants/login.constants';
import LoginAPI from '../helpers/login.api';
import history from '../helpers/history';
import { showLoading } from './MenAction';

export function setLoginStatus(data) {
  return {
    type: CONST.SET_LOGIN_STATUS,
    data
  }
}

export function login(credentials) {
  return (dispatch) => {
    dispatch(showLoading(true))
    LoginAPI.login(credentials).then(response => {
      dispatch(setLoginStatus({status:true, response:response}))
      dispatch(showLoading(false))
      history.push('/');
    }).catch(error => {
      dispatch(setLoginStatus(false))
      dispatch(showLoading(false))
      throw(error);
    });
  };
}
