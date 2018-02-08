import { DEFAULT_ACTION } from '../actions'
import { dispatch } from '../store'

export default function(state = {}, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {...state, someData: action.someData}
    default:
      return state
  }
}

export function defaultAction(someData) {
  return {
    type: DEFAULT_ACTION,
    someData
  }
}

export const boundDefaultAction = someData => dispatch(defaultAction(someData))
