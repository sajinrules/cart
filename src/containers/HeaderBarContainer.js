import { connect } from 'react-redux'
import HeaderBar from '../components/HeaderBar.component';


const mapStateToProps = (state) => {
  return {
		session:state.login
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const HeaderBarContainer =  connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
export default HeaderBarContainer
