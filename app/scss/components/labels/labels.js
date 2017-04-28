'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Label extends React.Component {
  render() {
    let classes = classNames(
      'label',
      this.props.modifiers[this.props.idx]
    );

    return (
      <span className={classes} title={this.props.text}>
        {this.props.text}
      </span>
    );
  }
}

Label.propTypes = {
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
};

Label.defaultProps = {
  modifiers: 'label--primary label--main'
};


export default Label;
