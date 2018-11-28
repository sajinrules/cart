import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		    username: '',
		    password: ''
		};
		console.log("this.props:",this.props);
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
	  this.props.onSubmit(this.state).then(response => {
			this.props.loginStatus({status:true, response:response})
      this.props.history.push('/');
    }).catch(error => {
			this.props.loginStatus(false)
      throw(error);
    });
	}
	validateForm() {
    // return this.state.usename.length > 0 && this.state.password.length > 0;
  }

	render() {
		return (
			<div className="login">
				<div className="container login-form-wrapper">
					<div className="content-wrapper">
						<div className="flex-1">
							<h1>Log in to get exciting offers</h1>
						</div>
						<div className="flex-1 form">
						<form onSubmit={this.login}>
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

							<Button bsSize="large" type="submit">Login
							</Button>
							</form>
						</div>
					</div>
				</div>
				<div>overly</div>
			</div>
		)
	}
}
export default Login
