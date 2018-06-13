

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers'
import Navbar from './components/Navbar.component';
import LoginContainer from './containers/LoginContainer';
import SampleComponent from './components/SampleComponent';
import './styles/index.css';
const $app = document.getElementById('app')

let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
    	<Navbar/>
	    <Router>
        <div>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/home" component={SampleComponent} />
        </div>
	    </Router>
    </div>
  </Provider>,
  $app
)
