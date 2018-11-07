import { connect } from 'react-redux'
import MensComponent from '../components/MensComponent';


const mapStateToProps = (state) => {
  console.log("Mens:",state);
  return {
		session:state.login
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const MensContainer =  connect(mapStateToProps, mapDispatchToProps)(MensComponent);
export default MensContainer
