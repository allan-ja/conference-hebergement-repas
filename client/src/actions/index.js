import axios from 'axios';
import { 
  ADD_ACTIVITY,
  ADD_REGISTRATION,
  FETCH_ACTIVITIES,
  FETCH_REGISTRATIONS,
  FETCH_USER,
  REGISTRATIONS_SAVE_SUCCESS
 } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const addActivity = (values) => dispatch => {

  dispatch({ type: ADD_ACTIVITY, payload: {...values, id:Date.now()}})
}

export const fetchActivities = () =>  async dispatch => {
  const res = await axios.get('/api/activities')
  const new_act = res.data.map( act => ({
      ...act, id: act._id, toSave: false
  }))
  
  dispatch({ type: FETCH_ACTIVITIES, payload: new_act})
}

export const persistActivities = (values) => async dispatch => {
  const res = await axios.post('/api/new_activities', values)
  
  if (res.status === 200) {
    const payload = {id: Date.now(), status: 1, message:'Save Successful'}
    dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
  } else {
    const payload = {id: Date.now(), status: 1, message:'Save Failed'}
    dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
  }
}  

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
  
  if (res.status === 200) {
    const payload = {id: Date.now(), status: 1, message:'Save Successful'}
    dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
  } else {
    const payload = {id: Date.now(), status: 1, message:'Save Failed'}
    dispatch({ type: REGISTRATIONS_SAVE_SUCCESS, payload: payload})
  }
}  
 