import {
  ITEMS_LOAD_SUCCESS,
  ITEMS_LOAD_FAILURE,
  ITEMS_LOAD_REQUEST
} from '../actions'
import { dispatch } from '../store'

export default function(state = [], action) {
  switch (action.type) {
    case ITEMS_LOAD_SUCCESS:
      return action.someData
    case ITEMS_LOAD_FAILURE:
      return {errorMessage: action.message}
    default:
      return state
  }
}

export function itemsLoadSuccess(someData) {
  return {
    type: ITEMS_LOAD_SUCCESS,
    someData
  }
}

export function itemsLoadFailure(message) {
  return {
    type: ITEMS_LOAD_FAILURE,
    message
  }
}

export function itemsLoadRequest() {
  return {
    type: ITEMS_LOAD_REQUEST
  }
}

export const boundItemsLoadRequest = () => dispatch(itemsLoadRequest())
