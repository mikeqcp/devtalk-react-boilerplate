import React, { PureComponent, PropTypes } from 'react';
import { intlShape } from 'react-intl';
import { List, fromJS } from 'immutable';
import { sumBy, shuffle, remove } from 'lodash';

import messages from './search.messages';
import { GifItem } from './components/gifItem/gifItem.component';
import { NewsItem } from './components/newsItem/newsItem.component';

function mergeArrays(...lists) {
  const arrays = lists.map(l => ({ type: l.type, items: l.items.toJS() }));
  const results = [];
  const sumLength = sumBy(lists, l => l.items.size);
  while (results.length < sumLength) {
    let arrOrdered = shuffle(arrays);
    const selected = arrOrdered[0];
    results.push({ type: selected.type, data: selected.items.shift() });
    if (selected.items.length === 0) {
      remove(arrays, a => a === selected);
    }
  }
  return results;
}

export class Search extends PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    gifs: PropTypes.object,
    news: PropTypes.object,
    fetchResults: PropTypes.func,
  };

  state = { items: new List() };

  componentWillReceiveProps(props) {
    this.setState({ items: mergeArrays({ type: 'gif', items: props.gifs }, { type: 'news', items: props.news }) });
  }

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

  renderItems() {
    return this.state.items.map((i, id) => {
      return {
        news: () => <NewsItem data={fromJS(i.data)} key={id} />,
        gif: () => <GifItem item={fromJS(i.data)} key={id} />,
      }[i.type]();
    });
  }

  render() {
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
          { this.renderItems() }
        </section>
      </div>
    );
  }
}
