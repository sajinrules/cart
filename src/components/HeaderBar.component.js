import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import CartContainer  from '../containers/CartContainer';
import { ProfileComponent } from './ProfileComponent'

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
					{this.props.session.status ?
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
						<Nav className="cart-profile" pullRight>
              <NavItem eventKey={3} href="#">
                <img height="20" alt="wishlist" src='../../icons/like.png'/>
              </NavItem>
							<CartContainer></CartContainer>
							<ProfileComponent></ProfileComponent>
						</Nav>
					</Navbar.Collapse>
					:
						<div className="login-register">
							<Link to="login" className="login-link">Login</Link>
							<a className="register-link" href="">Register</a>
						</div>
				}
				</Navbar>
			</div>
		)
	}
}

export default HeaderBar
