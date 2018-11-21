import React from 'react';
import Img1 from '../assets/products/adult-beard-cap-1040945.jpg';
import Product  from './ProductComponent';
import { MENS_PRODUCTS } from '../constants/mens.products'

class MensComponent extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    const width = {
      width: '80%'
    };
    return (
      <div className="content container">
        <h3>Mens</h3>
        <div className="product-wrapper">
          { MENS_PRODUCTS.map(product => {
            return <Product />
          })
          }
          
        </div>
      </div>

    )
  }
}

export default MensComponent
