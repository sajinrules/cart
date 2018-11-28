

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { createStore, applyMiddleware} from 'redux'
import { Route } from 'react-router-dom';
import reducers from './reducers'
import HeaderBarContainer from './containers/HeaderBarContainer';
import LoginContainer from './containers/LoginContainer';
import LandingComponent from './components/LandingComponent';
import MensComponent from './components/MensComponent';
import WomensComponent from './components/WomensComponent';
import KidsComponent from './components/KidsComponent';
import Footer from './components/FooterComponent'
import './compiled/index.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { RequireAuth } from './helpers/auth'
//import 'bootstrap/dist/css/bootstrap.min.css';

export const history = createBrowserHistory();

const $app = document.getElementById('app')
const middleware = [ thunk,logger];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
const store = createStore(reducers,applyMiddleware(...middleware)
)
//let store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <div>
	    <Router history={history}>
        <div>
          <HeaderBarContainer {...this.props}/>
          <Route exact path="/" component={LandingComponent} />
          <Route exact path="/men" component={RequireAuth(MensComponent)} />
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
