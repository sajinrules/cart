import React from 'react'
import { OverlayTrigger, Button, Popover,NavItem } from 'react-bootstrap';

import Cart from '../assets/cart.svg';


export class ProfileComponent extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );
    return (
      <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom"
      overlay={popoverClickRootClose}>
      {/*<NavItem eventKey={2} href="#">
        <img alt="logo" src={Cart}/>
      <ProfileComponent></ProfileComponent>
      </NavItem>*/}
      <NavItem eventKey={2} href="#">
        <img alt="logo" src={Cart}/>
      </NavItem>
    </OverlayTrigger>

    )
  }
}

export default ProfileComponent
