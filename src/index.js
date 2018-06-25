

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers'
import HeaderBar from './components/HeaderBar.component';
import LoginContainer from './containers/LoginContainer';
import SampleComponent from './components/SampleComponent';
import './compiled/index.css';
const $app = document.getElementById('app')

let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
    	<HeaderBar/>
	    <Router>
        <div>
          <Route exact path="/" component={SampleComponent} />
          <Route path="/login" component={LoginContainer} />
        </div>
	    </Router>
    </div>
  </Provider>,
  $app
)
