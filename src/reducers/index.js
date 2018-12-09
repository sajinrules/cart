import { combineReducers } from 'redux'
import login from './login';
import sessionReducer from './session'
import product from './mens';
import loader from './loader';

const reducers = combineReducers({
  login,
  sessionReducer,
  product,
  loader
})

export default reducers
