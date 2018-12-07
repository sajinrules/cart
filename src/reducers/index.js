import { combineReducers } from 'redux'
import login from './login';
import sessionReducer from './session'
import product from './mens';

const reducers = combineReducers({
  login,
  sessionReducer,
  product
})

export default reducers
