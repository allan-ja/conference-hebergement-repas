import axios from 'axios';
import { 
  ADD_REGISTRATION,
  FETCH_USER,
  FETCH_REGISTRATIONS,
  REGISTRATIONS_SAVE_SUCCESS
 } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRegistrations = () =>  async dispatch => {
   
  const res = await axios.get('/api/registrations')
  const new_reg = res.data.map( reg => ({
      ...reg, id: reg._id, toSave: false
  }))
  
  dispatch({ type: FETCH_REGISTRATIONS, payload: new_reg})
}

export const addRegistration = (values) => dispatch => {

    dispatch({ type: ADD_REGISTRATION, payload: {...values, id:Date.now()}})
}

export const persistRegistrations = (values) => async dispatch => {

  const res = await axios.post('/api/new_registrations', values)
  const payload = {id: Date.now(), status: 1, message:'Save Successful'}
 
  dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
}
