import React from 'react';
import Overly from '../containers/OverlyContainer'

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      isHovered: false
    };
  }
  
  handleEnter = () => {
    this.setState((prevState,props)=>{
      return {isHovered:true};
    })
  }

  handleLeave = () => {
    this.setState((prevState,props)=>{
      return {isHovered:false};
    })
  }
  
  render() {
    const width = {
      width: '80%'
    };
    var bg = {
      background: 'url(' + this.props.product.image + ')',
      height: '322px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
    const product = this.props.product;
    return (
      <div className="col-md-3 product">
        <div className="image" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          <span className="offer">-20%</span>
          <div className="product-image" style ={bg}></div>
          {
            this.state.isHovered ?(
              <Overly product={product}></Overly>
            ) :("")
          }
          
        </div>
        <div className="details">
          <div className="ratings">
            <div className="empty-stars"></div>
            <div className="full-stars" style={width}></div>
          </div>
          <div className="name">{this.props.product.name}</div>
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
