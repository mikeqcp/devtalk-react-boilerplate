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

const fetchSuccessReducer = (state, action) => state.set('items', fromJS(action.data.data));
const fetchReducer = (state) => state.set('items', []);

export const reducer = createReducer(INITIAL_STATE, {
  [SearchTypes.FETCH]: fetchReducer,
  [SearchTypes.FETCH_SUCCESS]: fetchSuccessReducer,
});
