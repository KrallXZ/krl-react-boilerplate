import { combineReducers } from 'redux'
import authReducer from './auth'
import itemsReducer from './items'


export default combineReducers({
  auth: authReducer,
  items: itemsReducer
})