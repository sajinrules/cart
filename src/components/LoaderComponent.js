import React from 'react';

class LoaderComponent extends React.Component {
  render() {
    if(this.props.loader.loader){
      document.body.classList.add('spinner-body');
    } else {
      document.body.classList.remove('spinner-body');
    } 
    return (
      <div className={"spinner-wrapper " + (this.props.loader.loader ? 'show-loader' : 'hide-loader')}>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    )
  }
}

export default LoaderComponent
