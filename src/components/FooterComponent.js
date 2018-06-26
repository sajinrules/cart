import React from 'react'
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
  navigate(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="footer-container">
        <Navbar className="footer">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">MyCart</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Navbar.Text>
                Signed in as: <Navbar.Link href="#">Sajin Abooabkkar</Navbar.Link>
              </Navbar.Text>
              <Navbar.Text pullRight>Contact Us</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Footer
