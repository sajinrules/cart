import * as CONST from '../constants/login.constants';

const login = (state = {status:'pending'}, action) => {
  switch (action.type) {
		case CONST.SET_LOGIN_STATUS:
	    return Object.assign({}, state, {
	      status: action.status
	    });

    default:
      return state;
  }
}
export default login
