const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function setLoginPending(isLoginPending) {
  console.log("isLoginPending:",isLoginPending)
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

export function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if (email === 'sajinrules' && password === 'sajin') {
        resolve(null);
      } else {
        reject(new Error('Invalid email and password'));
      }
    }, 1000);
  })
 }

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    // callLoginApi(email, password).then(() => {
    //   dispatch(setLoginPending(false));
    //   dispatch(setLoginSuccess(true));
    // }).catch((e)=>{
    //   dispatch(setLoginError(error));
    // });
  }
}