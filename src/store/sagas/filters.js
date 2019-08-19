import { put, call } from 'redux-saga/effects';
import api from '~/services/api';
import FilterActions from '../ducks/filters';

export function* loadFilter(search) {
  try {
    const filters = yield call(api.get, '/filters');

    yield put(
      FilterActions.loadFilterSuccess(filters.data),
    );
  } catch (error) {
    console.log(error);
    yield put(FilterActions.loadFilterFailure());
  }
}

export function* saveFilter(data) {
  try {
    
    const filters = yield call(api.post, '/filters', {
      title: data.data.title, 
      url: data.data.url, 
      _serviceId: data.data.service, 
    });
    
    console.log(filters);

  } catch (error) {
    console.log(error);
  }
}