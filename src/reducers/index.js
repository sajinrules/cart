import { combineReducers } from 'redux'
import login from './login';
import sessionReducer from './session'
import product from './mens';
import loader from './loader';
import cart from './cart';

const reducers = combineReducers({
  login,
  sessionReducer,
  product,
  loader,
  cart
})

export default reducers
