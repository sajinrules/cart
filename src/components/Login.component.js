import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		    username: '',
		    password: ''
		};
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  login(event){
	  event.preventDefault();
	  console.log("this.props:",this.props);
		//console.log("LoginAPI:",LoginAPI);
	  this.props.onSubmit(this.state)
	}

	render() {
		const { username, password } = this.state;
		return (
			<div className="login">
				<div className="login-form-wrapper px-0">
					<form className="login-form" onSubmit={this.login}>
						<div className="form-group row">
							<div className="col-12">
								<input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username"/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12">
								<input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
							</div>
						</div>
						<div className="form-group row">
							<button type="submit" className="btn bgc-primary text-white btn-lg btn-block">Login</button>
						</div>	
						</form>
				</div>
			</div>
		)
	}
}
export default Login
