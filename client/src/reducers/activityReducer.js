import { ADD_ACTIVITY, FETCH_ACTIVITIES } from '../actions/types'

export default function(state = [], action) {
    switch (action.type) {
      case ADD_ACTIVITY:
        return [...state, action.payload]     
      case FETCH_ACTIVITIES:
        return action.payload
      default:
        return state
    }
  }
