'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class ImgContainer extends React.Component {
  render() {
    let classes = classNames(
      'img-container',
      this.props.modifiers[this.props.idx]
    );

    return (
      <a href={this.props.link} className={classes}>
        <img itemProp={this.props.itemprop} src={this.props.imageUrl}
          alt={this.props.altText} />
      </a>
    );
  }
}

ImgContainer.propTypes = {
  link: React.PropTypes.string,
  imageUrl: React.PropTypes.string.isRequired,
  altText: React.PropTypes.string,
  itemprop: React.PropTypes.string
};

ImgContainer.defaultProps = {
  itemprop: 'image',
  modifiers: 'img-container__is-loading'
};


export default ImgContainer;
