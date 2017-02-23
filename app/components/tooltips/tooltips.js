'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Tooltip extends React.Component {
  render() {
    let classes = classNames(
      'has-tooltip__on-top',
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
  content: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

Tooltip.defaultProps = {
  modifiers: []
};


export default Tooltip;
