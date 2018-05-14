import * as actions from '../actions'
import { dispatch } from '../store'

export default function(state = [], action) {
  switch (action.type) {
    case actions.ITEMS_LOAD_SUCCESS:
      return action.items
    case actions.ITEMS_LOAD_FAILURE:
      return { errorMessage: action.message }
    default:
      return state
  }
}

export function itemsLoadSuccess(items) {
  return {
    type: actions.ITEMS_LOAD_SUCCESS,
    items
  }
}

export function itemsLoadFailure(message) {
  return {
    type: actions.ITEMS_LOAD_FAILURE,
    message
  }
}

export function itemsLoadRequest() {
  return {
    type: actions.ITEMS_LOAD_REQUEST
  }
}

export const boundItemsLoadRequest = () => dispatch(itemsLoadRequest())
