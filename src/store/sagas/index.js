import { all, takeLatest } from 'redux-saga/effects';

import { FilterTypes } from '../ducks/filters';
import { loadFilter, saveFilter } from './filters';

import { ServiceTypes } from '../ducks/services';
import { loadService } from './services';

export default function* rootSaga() {
  yield all([
    takeLatest(FilterTypes.LOAD_FILTER_REQUEST, loadFilter),
    takeLatest(FilterTypes.SAVE_FILTER_REQUEST, saveFilter),
    takeLatest(ServiceTypes.LOAD_SERVICE_REQUEST, loadService),
  ]);
}
