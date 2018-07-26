import React from 'react';
import { FormGroup, FormControl, Checkbox, Radio, ControlLabel, Button,HelpBlock} from 'react-bootstrap';

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
		console.log("e:",e.target);
    const { name, value } = e.target;
		debugger
    this.setState({ [name]: value });
  }

  login(event){
	  event.preventDefault();
	  console.log("this.props:",this.props);
		console.log("this.setState:",this.state);
		//console.log("LoginAPI:",LoginAPI);
	  this.props.onSubmit(this.state)
	}
	validateForm() {
    // return this.state.usename.length > 0 && this.state.password.length > 0;
  }

	render() {
		const { username, password } = this.state;
		return (
			<div className="login">
				<div className="container login-form-wrapper">
					<div className="content-wrapper">
						<div className="flex-1">
							<h1>Log in to get exciting offers</h1>
						</div>
						<div className="flex-1">
						<form onSubmit={this.handleSubmit}>
							<FormGroup controlId="usename" bsSize="large">
								<ControlLabel>Usename</ControlLabel>
								<FormControl
									autoFocus
									name="username"
									type="usename"
									value={this.state.usename}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup controlId="password" bsSize="large">
								<ControlLabel>Password</ControlLabel>
								<FormControl
									autoFocus
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
									type="password"
								/>
							</FormGroup>

							<Button bsSize="large" disabled={!this.validateForm()} type="submit">Login
							</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Login
