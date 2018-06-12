import { combineReducers } from 'redux'
import login from './login';
import sessionReducer from './session'
const reducers = combineReducers({
  login,
  sessionReducer
})

export default reducers
