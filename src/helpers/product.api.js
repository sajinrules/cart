import { MENS_PRODUCTS } from '../constants/mens.constants'

class ProductAPI {

  /** fake backend call using Promise */
  static get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({status:200, data:MENS_PRODUCTS, message:"Product fetched successfully"});
      }, 1000)
    });
  }
}

export default ProductAPI;