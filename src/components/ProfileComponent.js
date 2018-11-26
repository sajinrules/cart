import React from 'react';
import { NavItem, Badge } from 'react-bootstrap';


export class ProfileComponent extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="profile">
        <NavItem eventKey={3} href="#">
          <img alt="profile" src='../../icons/man.png'/>
        </NavItem>
      </div>

    )
  }
}

export default ProfileComponent
