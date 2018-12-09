import React from 'react';
import { Button } from 'react-bootstrap';

class OverlyComponent extends React.Component {
  
  componentDidMount(){
    //console.log("this.props:",this.props);
  }

  addCart = () =>{
    console.log("add cart");
    this.props.addCart(this.props.product)
  }

  wishListed = () =>{
    console.log("wishlist");
  }

  render() {
    console.log("this.props:",this.props);
    return (
      <div className="overly">
        <img alt="heart" height="20" src="../../icons/heart.png" />
        <img alt="like" height="20" onClick={this.wishListed} src="../../icons/like.png" />
        <Button bsStyle="danger" onClick={this.addCart}>ADD TO CART</Button>
      </div>
    )
  }
}

export default OverlyComponent