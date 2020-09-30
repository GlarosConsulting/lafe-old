import { combineReducers } from 'redux';

import alerts from './alerts';
import auth from './auth';
import navigation from './navigation';
import register from './register';

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
});
