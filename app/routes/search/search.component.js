import React, { PureComponent, PropTypes } from 'react';
import { intlShape } from 'react-intl';

import messages from './search.messages';
import { GifItem } from './components/gifItem/gifItem.component';
import { NewsItem } from './components/newsItem/newsItem.component';

export class Search extends PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    gifs: PropTypes.object,
    news: PropTypes.object,
    fetchResults: PropTypes.func,
  };

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.search();
    }
  };

  search = () => {
    this.props.fetchResults(this.state.query);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render()  {
    return (
      <div>
        <section className="search">
          <input className="search__input"
            type="text"
            name="query"
            onChange={this.handleChange}
            onKeyDown={this.onKeyDown}
          ></input>
          <input className="search__btn"
            type="button"
            onClick={this.search}
            value={this.props.intl.formatMessage(messages.btn)}
          ></input>
        </section>
        <section className="results">
          { this.props.gifs.map((i, id) => <GifItem item={i} key={id} />) }
          { this.props.news.map((i, id) => <NewsItem data={i} key={id} />) }
        </section>
      </div>
    );
  }
}
