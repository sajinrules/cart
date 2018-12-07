import * as CONST from '../constants/mens.constants';
import initialState from '../helpers/initialState';

const product = (state = initialState.products, action) => {
  switch (action.type) {
		case CONST.GET_PRODUCTS_SUCCESS:
      //LoginAPI.setToken(action.data.response.token)
      console.log("state  product:",state);
	    return Object.assign({}, state, {
	      product: action.data
	    });
    
    default:
      return state;
  }
}
export default product
