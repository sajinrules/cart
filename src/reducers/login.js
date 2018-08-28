import * as CONST from '../constants/login.constants';
import initialState from '../helpers/initialState';
import LoginAPI from '../helpers/login.api';

const login = (state = initialState.session, action) => {
  switch (action.type) {
		case CONST.SET_LOGIN_STATUS:
      LoginAPI.setToken(action.data.response.token)
	    return Object.assign({}, state, {
	      status: action.data.status
	    });
      break;
    default:
      return state;
  }
}
export default login
