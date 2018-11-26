import React from 'react';
import {Button } from 'react-bootstrap';

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
        isHovered: false
    };
    //this.handleHover = this.handleHover.bind(this);
  }
  
  handleEnter() {
    this.setState({
      isHovered: true 
    });
  }

  handleLeave() {
    this.setState({
      isHovered: false 
    });
  }
  
  render() {
    const width = {
      width: '80%'
    };
    //console.log("this.props:",this.props);
    var bg = {
      background: 'url(' + this.props.product.image + ')',
      height: '322px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '213px'
    }
    return (
      <div className="col-md-3 product">
        <div className="image" onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
          <span className="offer">-20%</span>
          <div className="product-image" style ={bg}></div>
          {/* <img alt="product image" className="product-image" src={Img1} /> */}
          {
            this.state.isHovered ?(
              <div className="overly">
                <img height="20" src="../../icons/heart.png" />
                <img height="20" src="../../icons/like.png" />
                <Button bsStyle="danger">ADD TO CART</Button>
              </div>
            ) :("")
          }
          
        </div>
        <div className="details">
          <div className="ratings">
            <div className="empty-stars"></div>
            <div className="full-stars" style={width}></div>
          </div>
          <div>{this.props.product.name}</div>
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
