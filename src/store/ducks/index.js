import { combineReducers } from 'redux';
import { reducer as filter } from './filters';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  filter,
});

export default reducers;
