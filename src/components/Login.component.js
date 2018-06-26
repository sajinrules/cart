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
		function FieldGroup({ id, label, help, ...props }) {
		  return (
		    <FormGroup controlId={id}>
		      <FormControl {...props} />
		      {help && <HelpBlock>{help}</HelpBlock>}
		    </FormGroup>
		  );
		}
		return (
			<div className="login">
				<div className="container login-form-wrapper">
					<div>Content here</div>
					<div>
						<form>
							<FieldGroup
								id="formControlsEmail"
								type="email"
								label="Email address"
								placeholder="Enter email"
							/>
							<FieldGroup id="formControlsPassword" label="Password" type="password" />
							<Button type="submit">Submit</Button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Login
