require('./_buttons.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames(
      'button',
      this.props.modifiers
    );

    return (
      <div>
        <button className={classes} type={this.props.type}>
          {this.props.text}
        </button>

        // TODO (ecalvi): Modifiers should be mapped within the former render.
        <button className="button button--main" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--primary" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--secondary" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--link" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--facebook" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--sm" type={this.props.type}>
          {this.props.text}
        </button>

        <button className="button button--lg" type={this.props.type}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  type: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
};

Button.defaultProps = {
  type: 'button',
  text: '',
  modifiers: [
    'button--main',
    'button--primary',
    'button--secondary',
    'button--link',
    'button--facebook'
  ]
};

export default Button;
