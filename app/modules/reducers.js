import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as searchReducer } from './search/search.redux';

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    search: searchReducer,
    locales: localesReducer,
  });
}
