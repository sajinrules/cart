class LoginAPI {

  /* create dummy token */
  static login(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //clearTimout(wait);
        if (credentials.username ==='sajinrules' && credentials.password === 'sajin')
          resolve({status:200,username:credentials.username,message:"",token:this.createToken()});
        else
          reject({status:400,username:undefined,message:"Username and password mismatch !"});
      }, 2000)
    });
  }

  /* create dummy token */
  static createToken() {
    return Math.random().toString(36).slice(2)
  }

  static setToken(token){
    localStorage.setItem("token",token);
  }

  static getToken(){
    return localStorage.getItem("token");
  }
}
export default LoginAPI;
