import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { SearchActions } from '../../modules/search/search.redux';
import { selectSearchItems } from '../../modules/search/search.selectors';

import { Search } from './search.component';

const mapStateToProps = createStructuredSelector({
  items: selectSearchItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchResults: SearchActions.fetch,
}, dispatch);

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Search));
