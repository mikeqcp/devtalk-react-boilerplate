import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../api/api.sagas';
import { SearchTypes, SearchActions } from './search.redux';

export function* fetchResultsSaga({ query }) {
  console.log(query);
  const params = { q: encodeURIComponent(query), api_key: 'dc6zaTOxFJmzC' } // eslint-disable-line
  try {
    const data = yield call(get, 'http://api.giphy.com/v1/gifs/search', params);
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
