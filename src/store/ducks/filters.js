import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import Mergers from 'seamless-immutable-mergers';

/**
 * Action types & creators
 */
const { Types, Creators } = createActions({
  loadFilterRequest: ['search'],
  loadFilterSuccess: ['data'],
  loadFilterFailure: null,
});

export const FilterTypes = Types;
export default Creators;

/**
 * Handlers
 */
const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_FILTER_SUCCESS]: (state, { data }) => state.merge({ data }),
});
