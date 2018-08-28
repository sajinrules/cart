import LoginAPI from './login.api';

export default {
  session: {status: !!LoginAPI.getToken()}
}
