import * as CONST from '../constants/overly.constants';
import initialState from '../helpers/initialState';

const cart = (state = initialState.cart, action) => {
  console.log("cart:",action);
  switch (action.type) {
		case CONST.ADD_TO_CART:
      return [...state, action.data];
    
    default:
      return state;
  }
}
export default cart
