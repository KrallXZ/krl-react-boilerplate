import { call, put, takeLatest } from 'redux-saga/effects'
import {
  ITEMS_LOAD_REQUEST,
  ITEMS_LOAD_SUCCESS,
  ITEMS_LOAD_FAILURE
} from '../actions'
import { itemsLoadSuccess, itemsLoadFailure } from '../reducers/items'
import { api } from '../api'

function* loadItems(action) {
  try {
    const items = yield call(api.loadItems)
    yield put(itemsLoadSuccess(items))
  } catch (e) {
    yield put(itemsLoadFailure(e.message))
  }
}

export default function* mySaga() {
  yield takeLatest(ITEMS_LOAD_REQUEST, loadItems)
}
