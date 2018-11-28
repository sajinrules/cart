import React from 'react';
import { NavItem, Badge } from 'react-bootstrap';


export class CartComponent extends React.Component {
  render() {
    return (
      <div className="cart">
        <NavItem eventKey={2} href="#">
          <Badge>42</Badge>
          <img height="25" alt="logo" src='../../icons/cart (3).png'/>
        </NavItem>
      </div>

    )
  }
}

export default CartComponent
