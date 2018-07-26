import axios from 'axios';
import { FETCH_USER, FETCH_REGISTRATIONS, ADD_REGISTRATION } from './types';

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
