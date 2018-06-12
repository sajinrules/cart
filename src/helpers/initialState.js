import LoginAPI from './login.api';

export default {
  session: !!LoginAPI.getToken()
}
