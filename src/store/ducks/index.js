import { combineReducers } from 'redux';
import { reducer as service } from './services';
import { reducer as filter } from './filters';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  service,
  filter,
});

export default reducers;
