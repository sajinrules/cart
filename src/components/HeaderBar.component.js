import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.svg';
import Person from '../assets/person.svg';
import { Link } from 'react-router-dom';
import { ProfileComponent } from './Profile.component'

export class HeaderBar extends React.Component {
	render() {
		return (
			<div className="">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<div><img alt="logo" src={Logo}/> <Link to="/">MyCart</Link></div>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<div>
							<Nav>
								<NavItem componentClass={Link} href="/men" to="/men">
									Men
								</NavItem>
								<NavItem componentClass={Link} href="/women" to="/women">
									Women
								</NavItem>
								<NavItem componentClass={Link} href="/kids" to="/kids">
									Kids
								</NavItem>
							</Nav>
						</div>
						<Nav pullRight>
							<ProfileComponent></ProfileComponent>
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
