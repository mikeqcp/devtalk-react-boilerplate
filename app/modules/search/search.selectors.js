import { createSelector } from 'reselect';

const selectSearchDomain = state => state.get('search');

export const selectGifsItems = createSelector(
  selectSearchDomain,
  state => state.get('gifs')
);

export const selectNewsItems = createSelector(
  selectSearchDomain,
  state => state.get('news')
);
