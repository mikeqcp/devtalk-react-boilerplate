import React, { PropTypes, PureComponent } from 'react';


export class GifItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    return (
      <img className="item item--gif" src={this.props.item.getIn(['images', 'downsized_medium', 'url'])} />
    );
  }
}
