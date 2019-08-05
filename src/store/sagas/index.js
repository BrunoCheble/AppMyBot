import { all, takeLatest } from 'redux-saga/effects';

import { FilterTypes } from '../ducks/filters';
import { loadFilter } from './filters';

export default function* rootSaga() {
  yield all([
    takeLatest(FilterTypes.LOAD_FILTER_REQUEST, loadFilter),
  ]);
}
