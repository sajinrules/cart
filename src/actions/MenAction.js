import * as CONST from '../constants/mens.constants';
import ProductAPI from '../helpers/product.api';

export function Products() {
  return (dispatch) => {
    dispatch(showLoading(true));
    ProductAPI.get().then(res => {
      dispatch(getProductsSuccess(res.data));
      dispatch(hideLoading(false));
    }, error =>{
      dispatch(getProductsFailure(error))
      dispatch(hideLoading(false));
    })
  };
}

const getProductsSuccess = data => ({
  type: CONST.GET_PRODUCTS_SUCCESS,
  data
});

const getProductsFailure = error => ({
  type: CONST.GET_PRODUCTS_FAILURE,
  error
});

const showLoading = data => ({
  type: CONST.SHOW_LOADING,
  data
});

const hideLoading = data => ({
  type: CONST.HIDE_LOADING,
  data
});