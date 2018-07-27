import { ADD_REGISTRATION, FETCH_REGISTRATIONS } from '../actions/types'

export default function(state = {}, action) {
    switch (action.type) {
      case ADD_REGISTRATION:
        return Object.assign({}, state, {
          data: [...state.data, action.payload]
        })
      case FETCH_REGISTRATIONS:
        return Object.assign({}, state, {
          data: action.payload
        })
      default:
        return state
    }
  }
