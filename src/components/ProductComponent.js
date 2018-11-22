import React from 'react';
import Img1 from '../assets/products/adult-beard-cap-1040945.jpg';

class Product extends React.Component {
  render() {
    const width = {
      width: '80%'
    };
    console.log("this.props:",this.props);
    var bg = {
      backgroundImage: 'url(' + this.props.product.image + ')'
    }
    return (
      <div className="col-md-3 product">
        <div className="image">
          <span className="offer">-20%</span>
          {/* <div className="image" style ={bg}></div> */}
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
