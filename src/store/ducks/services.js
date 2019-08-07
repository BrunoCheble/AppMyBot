import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import Mergers from 'seamless-immutable-mergers';

/**
 * Action types & creators
 */
const { Types, Creators } = createActions({
  loadServiceRequest: ['search'],
  loadServiceSuccess: ['data'],
  loadServiceFailure: null,
});

export const ServiceTypes = Types;
export default Creators;

/**
 * Handlers
 */
const INITIAL_STATE = Immutable({
  data: {
      id: '',
      emails: '',
      interval: '',
      filters: [],
  },
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SERVICE_SUCCESS]: (state, { data }) => state.merge({ data }),
});
