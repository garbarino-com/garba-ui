'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Docs extends React.Component {
  render() {
    let classes = classNames(
      '',
      this.props.modifiers
    );

    return (
      <span></span>
    );
  }
}

Docs.propTypes = {
};

Docs.defaultProps = {};

export default Docs;
