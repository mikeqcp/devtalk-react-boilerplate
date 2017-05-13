import React, { PureComponent, PropTypes } from 'react';
import { intlShape } from 'react-intl';

import messages from './search.messages';
import { GifItem } from './components/gifItem/gifItem.component';

export class Search extends PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    items: PropTypes.object,
    fetchResults: PropTypes.func,
  };

  search = () => {
    this.props.fetchResults(this.state.query);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <section>
          <input type="text" name="query" onChange={this.handleChange}></input>
          <input type="button" onClick={this.search} value={this.props.intl.formatMessage(messages.btn)}></input>
        </section>
        <section>
          { this.props.items.map((i, id) => <GifItem item={i} key={id} />) }
        </section>
      </div>
    );
  }
}
