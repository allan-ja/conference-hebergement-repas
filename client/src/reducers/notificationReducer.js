import { REGISTRATIONS_SAVE_SUCCESS } from '../actions/types'

export default function(state = {id: 0}, action) {
    switch (action.type) {
      case REGISTRATIONS_SAVE_SUCCESS:
        return Object.assign({}, state, {
          ...action.payload 
        })
      default:
        return state
    }
  }
