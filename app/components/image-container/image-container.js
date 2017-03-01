'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class ImgContainer extends React.Component {
  render() {
    let classes = classNames(
      'img-container',
      this.props.modifiers
    );

    return (
      <div className={classes}>
        <img itemprop="image" src={this.props.imageUrl}
          alt={this.props.altText} />
      </div>
    );
  }
}

ImgContainer.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  altText: React.PropTypes.string,
  itemprop: React.PropTypes.string
};

ImgContainer.defaultProps = {
  itemprop: 'image'
};


export default ImgContainer;
