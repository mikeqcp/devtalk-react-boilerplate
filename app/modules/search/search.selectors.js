import { createSelector } from 'reselect';

const selectSearchDomain = state => state.get('search');

export const selectSearchItems = createSelector(
  selectSearchDomain, state => state.get('items')
);
