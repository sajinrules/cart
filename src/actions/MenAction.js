import * as CONST from '../constants/mens.constants';
import ProductAPI from '../helpers/product.api';

// export function setLoginStatus(data) {
//   return {
//     type: CONST.SET_LOGIN_STATUS,
//     data
//   }
// }

export function Products() {
  return (dispatch) => {
    ProductAPI.get().then(res => {
      console.log("res:",res);
      dispatch(getProductsSuccess(res.data));
    }, error =>{
      dispatch(getProductsFailure(error))
    })
  };
}

const getProductsSuccess = data => ({
  type: CONST.GET_PRODUCTS_SUCCESS,
  data
});
const getProductsFailure = error => ({
  type: CONST.GET_PRODUCTS_FAILURE,
  payload: {
    error
  }
});