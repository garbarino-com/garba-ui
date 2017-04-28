'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Tag extends React.Component {
  render() {
    let classes = classNames(
      'tag',
      this.props.modifiers
    );

    return (
      <span className={classes} title={this.props.text}>
        {this.props.text}
      </span>
    );
  }
}

Tag.propTypes = {
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string
};


export default Tag;
