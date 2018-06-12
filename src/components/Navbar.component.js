import React from 'react'



class Navbar extends React.Component {
	render() {
		return (
		<div className="">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<a className="navbar-brand" href="">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								sajinrules@gmail.com
								</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="">My Profile</a>
								<a className="dropdown-item" href="">Cart</a>
								<a className="dropdown-item" href="">Wish list</a>
								<a className="dropdown-item" href="">My Orders</a>
								<a className="dropdown-item" href="">Log out</a>
							</div>
							</li>
						</ul>
					</div>
				</div>

			</nav>
		</div>

		)
	}
}

export default Navbar
