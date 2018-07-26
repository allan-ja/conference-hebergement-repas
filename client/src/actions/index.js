import axios from 'axios';
import { FETCH_USER, FETCH_REGISTRATIONS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRegistrations = () =>  async dispatch => {
  const data = [
    {
      id: 1,
      firstname: 'Bobo',
      lastname: 'Smith',
      email: 'alice@gmail.com'
    }
  ]
  
  dispatch({ type: FETCH_REGISTRATIONS, payload: data})
}
