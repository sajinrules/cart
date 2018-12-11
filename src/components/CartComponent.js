import React from 'react';
import { NavItem, Badge, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';


export class CartComponent extends React.Component {
  render() {
    console.log("this.props:",this.props);
    return (
      <div className="cart">
        <NavItem eventKey={2} href="#">
        { this.props.cart.length ? 
          <Badge>{this.props.cart.length}</Badge>
          :''
        }  
          <img height="25" alt="logo" src='../../icons/cart (3).png'/>
        </NavItem>
        
          <DropdownButton
            bsStyle="default"
            title="No caret"
            noCaret
            id="dropdown-no-caret"
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        
      </div>

    )
  }
}

export default CartComponent
