import * as CONST from '../constants/mens.constants';
import initialState from '../helpers/initialState';

const loader = (state = initialState.loader, action) => {
  switch (action.type) {
		case CONST.SHOW_LOADING:
	    return Object.assign({}, state, {
	      loader: action.data
      });
    
    case CONST.HIDE_LOADING:
	    return Object.assign({}, state, {
	      loader: action.data
	    });  
    
    default:
      return state;
  }
}
export default loader
