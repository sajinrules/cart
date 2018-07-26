import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.svg';
import Person from '../assets/person.svg';

export class HeaderBar extends React.Component {
	navigate(path) {
    this.props.history.push(path);
  }
	render() {
		return (
			<div className="">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<div><img alt="logo" src={Logo}/> <a href="#brand">MyCart</a></div>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<div>
							<Nav>
								<NavItem onClick={() => this.navigate('/men') } eventKey={1} href="#">
									Men
								</NavItem>
								<NavItem onClick={() => this.navigate('/women') } eventKey={2} href="#">
									Women
								</NavItem>
								<NavItem onClick={() => this.navigate('/kids') } eventKey={2} href="#">
									Kids
								</NavItem>
							</Nav>
						</div>
						<Nav pullRight>
						<NavItem eventKey={2} href="#">
							<img alt="logo" src={Cart}/>
						</NavItem>
							<NavItem eventKey={1} href="#">
								<img alt="logo" src={Person}/>
							</NavItem>

						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default HeaderBar
