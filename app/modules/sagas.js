import maintainersSaga from './maintainers/maintainers.sagas';
import searchSaga from './search/search.sagas';

export default function* rootSaga() {
  yield [
    maintainersSaga(),
    searchSaga(),
  ];
}
