import { ADD_REGISTRATION, FETCH_REGISTRATIONS } from '../actions/types'

export default function(state = [], action) {
    switch (action.type) {
      case ADD_REGISTRATION:
        return [...state, action.payload]
      case FETCH_REGISTRATIONS:
        return action.payload
      default:
        return state
    }
  }
