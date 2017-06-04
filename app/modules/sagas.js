import searchSaga from './search/search.sagas';

export default function* rootSaga() {
  yield [
    searchSaga(),
  ];
}
