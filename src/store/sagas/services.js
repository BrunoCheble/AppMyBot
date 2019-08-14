import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import ServiceActions from '../ducks/services';

export function* loadService(search) {
  try {
    const service = yield call(api.get, '/services/' + search.search);

    if(service.status == 200) {
      
      const value = yield AsyncStorage.getItem('search');

      if (value === null || search.search !== value) {
        yield AsyncStorage.setItem('search', search.search);
      }

      yield put(ServiceActions.loadServiceSuccess(service.data));
    }

  } catch (error) {
    yield put(ServiceActions.loadServiceFailure());
  }
}
