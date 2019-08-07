import { put, call } from 'redux-saga/effects';

import api from '~/services/api';
import ServiceActions from '../ducks/services';

export function* loadService(search) {
  try {
    const service = yield call(api.get, '/services/5d3ddeea5a7ac51640908f40');
    console.log(service.data);
    yield put(ServiceActions.loadServiceSuccess(service.data));
  } catch (error) {
    yield put(ServiceActions.loadServiceFailure());
  }
}
