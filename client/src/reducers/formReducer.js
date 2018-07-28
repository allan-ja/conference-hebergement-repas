import { reducer } from 'redux-form'
import { ADD_REGISTRATION } from '../actions/types'

export default reducer.plugin({
    RegistrationForm: (state, action) => {
      switch(action.type) {
        case ADD_REGISTRATION:
          return undefined;
        default:
          return state;
      }
    }
    
  })