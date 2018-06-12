import React from 'react'



class Signup extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup
