import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: SearchTypes, Creators: SearchActions } = createActions({
  fetch: ['query'],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
}, { prefix: 'SEARCH_' });

const SearchRecord = new Record({
  gifs: List(),
  news: List(),
});

export const INITIAL_STATE = new SearchRecord({});

const fetchSuccessReducer = (state, action) => state.merge({
  gifs: fromJS(action.data[0].data),
  news: fromJS(action.data[1].response.results),
});

const fetchReducer = (state) => state.merge({
  gifs: new List(),
  news: new List(),
});

export const reducer = createReducer(INITIAL_STATE, {
  [SearchTypes.FETCH]: fetchReducer,
  [SearchTypes.FETCH_SUCCESS]: fetchSuccessReducer,
});
