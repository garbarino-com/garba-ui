'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Tooltip extends React.Component {
  render() {
    let classes = classNames(
      'has__tooltip-on-top',
      this.props.modifiers
    );

    return (
      <p>
        <span className={classes} aria-label={this.props.content}>
          {this.props.text}
        </span>
      </p>
    );
  }
}

Tooltip.propTypes = {
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
  title: React.PropTypes.string,
  text: React.PropTypes.string
};

Tooltip.defaultProps = {
  modifiers: []
};


export default Tooltip;
