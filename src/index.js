

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware} from 'redux'
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers'
import HeaderBar from './components/HeaderBar.component';
import LoginContainer from './containers/LoginContainer';
import LandingComponent from './components/LandingComponent';
import MensComponent from './components/MensComponent';
import WomensComponent from './components/WomensComponent';
import KidsComponent from './components/KidsComponent';
import Footer from './components/FooterComponent'
import './compiled/index.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

export const history = createBrowserHistory();

const $app = document.getElementById('app')
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const store = createStore(reducers,applyMiddleware(...middleware)
)
//let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>

	    <Router history={history}>
        <div>
          <HeaderBar {...this.props}/>
          <Route exact path="/" component={LandingComponent} />
          <Route exact path="/men" component={MensComponent} />
          <Route exact path="/women" component={WomensComponent} />
          <Route exact path="/kids" component={KidsComponent} />
          <Route path="/login" component={LoginContainer} />
        </div>
	    </Router>
      <Footer/>
    </div>
  </Provider>,
  $app
)
