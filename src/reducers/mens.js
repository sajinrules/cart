import * as CONST from '../constants/mens.constants';
import initialState from '../helpers/initialState';

const product = (state = initialState.products, action) => {
  switch (action.type) {
		case CONST.GET_PRODUCTS_SUCCESS:
	    return Object.assign({}, state, {
	      product: action.data
	    });
    
    default:
      return state;
  }
}
export default product
