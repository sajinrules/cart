//import { browserHistory } from 'react-router';
import * as CONST from '../constants/login.constants';
import initialState from '../helpers/initialState';
// import createHistory from "history/createBrowserHistory"
// const history = createHistory()

//import LoginAPI from '../helpers/login.api';

export default function sessionReducer(state = initialState.session, action) {
  //debugger;
  switch(action.type) {
    case CONST.SET_LOGIN_STATUS:
      //history.push('/men')
      return action.state
      break;
    default:
      return state;
  }
}
