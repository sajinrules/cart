import { connect } from 'react-redux'
import OverlyComponent from '../components/OverlyComponent';
import { AddtoCart, AddtoWishlist } from '../actions';


const mapStateToProps = (state) => {
  console.log("overly container:",state);
  return {
		cart:state.cart
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
    addCart :(data) => dispatch(AddtoCart(data)),
    wishlist :(data) => dispatch(AddtoWishlist(data))
	}
}

const Overly =  connect(mapStateToProps, mapDispatchToProps)(OverlyComponent);
export default Overly
