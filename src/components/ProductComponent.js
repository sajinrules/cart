import React from 'react';
import Img1 from '../assets/products/adult-beard-cap-1040945.jpg';

class Product extends React.Component {
  render() {
    const width = {
      width: '80%'
    };
    return (
      <div className="product">
        <div className="image">
          <span className="offer">-20%</span>
          <img alt="product image" className="product-image" src={Img1} />
          <div className="overly">here</div>
        </div>
        <div className="details">
          <div className="ratings">
            <div className="empty-stars"></div>
            <div className="full-stars" style={width}></div>
          </div>
          <div>Brand Name</div>
          <div>
            <span className="new-price">$16.00</span>
            <span className="old-price">$20.00</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
