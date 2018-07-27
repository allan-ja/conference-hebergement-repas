import axios from 'axios';
import { 
  ADD_REGISTRATION,
  FETCH_USER,
  FETCH_REGISTRATIONS,
  REGISTRATIONS_SAVE_SUCCESS,
  REGISTRATIONS_SAVE_FAILURE,
  REGISTRATIONS_SAVE_RESET
 } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRegistrations = () =>  async dispatch => {
  // TODO: Async request to backend
  const data = [
    {
      id: 3,
      firstName: 'MongoDB',
      lastName: 'Smith',
      email: 'alice@gmail.com'
    }
  ]  
  dispatch({ type: FETCH_REGISTRATIONS, payload: data})
}

export const addRegistration = (values) => dispatch => {
    console.log('addRegistration', values)
    dispatch({ type: ADD_REGISTRATION, payload: {...values, id:Date.now()}})
}

export const persistRegistrations = (values) => async dispatch => {
  console.log('persistRegistrations')
  const payload = {id: Date.now(), status: 1, message:'rick'}
  // if (isSuccess.message) {
    
  // }
  dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
}
