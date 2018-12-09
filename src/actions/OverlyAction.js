import * as CONST from '../constants/overly.constants';

export function AddtoCart(data) {
  return {
    type: CONST.ADD_TO_CART,
    data
  }
}

export function AddtoWishlist(data) {
  return {
    type: CONST.ADD_TO_WISHLIST,
    data
  }
}
