import { connect } from 'react-redux'
import CartComponent from '../components/CartComponent';


const mapStateToProps = (state) => {
  console.log("cart container:",state);
  return {
		cart:state.cart
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const CartContainer =  connect(mapStateToProps, mapDispatchToProps)(CartComponent);
export default CartContainer
