import { connect } from 'react-redux'
import Login from '../components/Login.component';
import { login, setLoginStatus } from '../actions';

const mapStateToProps = (state) => {
  return {
		status:state.login.status
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit :(credentials) => dispatch(login(credentials)),
    loginStatus:(status) => dispatch(setLoginStatus(status))
	}
}

const LoginContainer =  connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer
