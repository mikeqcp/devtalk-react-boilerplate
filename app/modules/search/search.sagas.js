import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../api/api.sagas';
import { SearchTypes, SearchActions } from './search.redux';

function callGif(query) {
  const params = { q: encodeURIComponent(query), api_key: 'dc6zaTOxFJmzC' } // eslint-disable-line
  return call(get, 'http://api.giphy.com/v1/gifs/search', params);
}

function callNews(query) {
  const params = {
    q: '"' + encodeURIComponent(query) + '"',
    'api-key': 'test',
    'from-date': '2015-01-01',
  };
  return call(get, 'https://content.guardianapis.com/search', params);
}

export function* fetchResultsSaga({ query }) {
  try {
    const data = yield [
      callGif(query),
      callNews(query),
    ];
    yield put(SearchActions.fetchSuccess(data));
  } catch (e) {
    yield put(SearchActions.fetchError(e));
  }
}

export default function* searchSaga() {
  yield [
    takeLatest(SearchTypes.FETCH, fetchResultsSaga),
  ];
}
