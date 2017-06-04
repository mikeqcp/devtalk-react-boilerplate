import React, { PropTypes, PureComponent } from 'react';


export class GifItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const style =  {
      backgroundImage: `url('${this.props.item.getIn(['images', 'downsized_medium', 'url'])}')`
    };

    return (
      <div className="item item--gif" style={style} ></div>
    );
  }
}
