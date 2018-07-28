import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer'
import formReducer from './formReducer'
import notifReducer from './notificationReducer'
import activityReducer from './activityReducer'

export default combineReducers({
  auth: authReducer,
  registrations: registrationReducer,
  form: formReducer,
  notification: notifReducer,
  activities: activityReducer
});