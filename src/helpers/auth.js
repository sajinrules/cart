import React, { Component}  from 'react';
import LoginAPI from '../helpers/login.api';

const RequireAuth = (Component) => {
  return class App extends Component {
    componentWillMount() {
      if(!LoginAPI.getToken()) {
        this.props.history.replace({pathname: '/login'});
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export { RequireAuth }
