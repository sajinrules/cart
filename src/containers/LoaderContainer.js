import { connect } from 'react-redux'
import LoaderComponent from '../components/LoaderComponent';


const mapStateToProps = (state) => {
  return {
		loader:state.loader
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		//getProducts :() => dispatch(Products()),
    //loginStatus:(status) => dispatch(setLoginStatus(status))
	}
}

const LoaderContainer =  connect(mapStateToProps, mapDispatchToProps)(LoaderComponent);
export default LoaderContainer
