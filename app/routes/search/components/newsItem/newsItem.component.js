import React, { PropTypes, PureComponent } from 'react';

export class NewsItem extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="item news">
        <span className="news__category">{this.props.data.get('sectionName')}</span>
        <span className="news__text">{this.props.data.get('webTitle')}</span>
        <a className="news__link" href={this.props.data.get('webUrl')} target="_blank">Read more</a>
      </div>
    );
  }
}
