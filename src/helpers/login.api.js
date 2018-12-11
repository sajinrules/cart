class LoginAPI {

  /** fake backend call using Promise */
  static login(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //clearTimout(wait);
        if (credentials.username ==='sajinrules' && credentials.password === 'sajin')
          resolve({status:200,username:credentials.username,message:"",token:this.createToken()});
        else
          reject({status:400,username:undefined,message:"Username and password mismatch !"});
      }, 1000)
    });
  }

  /** create dummy token */
  static createToken() {
    return Math.random().toString(36).slice(2)
  }

  /** set session token */
  static setToken(token){
    sessionStorage.setItem("token",token);
  }

  /** get session token */
  static getToken(){
    return sessionStorage.getItem("token");
  }

  /** route authentication */
  static requireAuth(nextState, replace) {
    if (!this.getToken()) {
      debugger;
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
}
export default LoginAPI;
