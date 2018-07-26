import { FETCH_REGISTRATIONS } from '../actions/types'

export default function(state = [], action) {
    console.log(action)
    console.log(FETCH_REGISTRATIONS)
    console.log(action.type === FETCH_REGISTRATIONS)
    console.log(action.type)
  switch (action.type) {
    case FETCH_REGISTRATIONS:
      return action.payload
    default:
      return state
  }
}
