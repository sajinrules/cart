import React from 'react';
import Product  from './ProductComponent';

class MensComponent extends React.Component {
  
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const products = this.props.products || [];
    return (
      <div className="content container">
        <h3>Mens</h3>
        <div className="row product-wrapper">
          { products.map((product, i) => {
            return <Product key={i} product={product} />
          })
          }
        </div>
      </div>

    )
  }
}

export default MensComponent
