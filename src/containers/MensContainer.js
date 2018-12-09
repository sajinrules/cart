import { connect } from 'react-redux'
import MensComponent from '../components/MensComponent';
import { Products } from '../actions';


const mapStateToProps = (state) => {
  return {
		products:state.product.product
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts :() => dispatch(Products())
	}
}

const MensContainer =  connect(mapStateToProps, mapDispatchToProps)(MensComponent);
export default MensContainer
