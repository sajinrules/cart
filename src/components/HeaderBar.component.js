import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.svg';
import Person from '../assets/person.svg';

export class HeaderBar extends React.Component {
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
								<NavItem eventKey={1} href="#">
									Men
								</NavItem>
								<NavItem eventKey={2} href="#">
									Women
								</NavItem>
								<NavItem eventKey={2} href="#">
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
