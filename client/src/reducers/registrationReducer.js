import { FETCH_REGISTRATIONS } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REGISTRATIONS:
      return action.payload
    default:
      return state
  }
}
