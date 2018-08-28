//import { browserHistory } from 'react-router';
import * as CONST from '../constants/login.constants';
import initialState from '../helpers/initialState';
import LoginAPI from '../helpers/login.api';

export default function sessionReducer(state = initialState.session, action) {
  //debugger;
  switch(action.type) {
    case CONST.SET_LOGIN_SUCCESS:
      return action.status
      break;
    default:
      return state;
  }
}
