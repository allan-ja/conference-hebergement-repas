import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer'
import formReducer from './formReducer'

export default combineReducers({
  auth: authReducer,
  registrations: registrationReducer,
  form: formReducer
});