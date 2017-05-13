import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: SearchTypes, Creators: SearchActions } = createActions({
  fetch: ['query'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'SEARCH_' });

const SearchRecord = new Record({
  items: List(),
});

export const INITIAL_STATE = new SearchRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('items', fromJS(action.data.data));

export const reducer = createReducer(INITIAL_STATE, {
  [SearchTypes.FETCH_SUCCESS]: getSuccessHandler,
});
