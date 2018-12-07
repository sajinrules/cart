import { connect } from 'react-redux'
import MensComponent from '../components/MensComponent';
import { Products } from '../actions';


const mapStateToProps = (state) => {
  console.log("Mens:",state.product);
  return {
		products:state
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts :() => dispatch(Products()),
    //loginStatus:(status) => dispatch(setLoginStatus(status))
	}
}

const MensContainer =  connect(mapStateToProps, mapDispatchToProps)(MensComponent);
export default MensContainer
