

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers'
import HeaderBar from './components/HeaderBar.component';
import LoginContainer from './containers/LoginContainer';
import LandingComponent from './components/LandingComponent';
import MensComponent from './components/MensComponent';
import WomensComponent from './components/WomensComponent';
import KidsComponent from './components/KidsComponent';
import './compiled/index.css';
const $app = document.getElementById('app')

let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
    	<HeaderBar/>
	    <Router>
        <div>
          <Route exact path="/" component={LandingComponent} />
          <Route exact path="/men" component={MensComponent} />
          <Route exact path="/women" component={WomensComponent} />
          <Route exact path="/kids" component={KidsComponent} />
          <Route path="/login" component={LoginContainer} />
        </div>
	    </Router>
    </div>
  </Provider>,
  $app
)
