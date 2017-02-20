import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames(
      'button--action button--action__primary',
      this.props.modifiers[this.props.idx]
    );

    return (
      <button className={classes} type={this.props.type}
          aria-label="Sample text to display in tooltip.">
        <i className={this.props.class}></i>
        {this.props.text}
      </button>
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
    'button--action has__tooltip-on-top button--action__primary',
    'button--action has__tooltip-on-top button--action__fav',
    'button--action has__tooltip-on-top button--action__facebook',
    'button--action has__tooltip-on-top button--action__twitter'
  ]
};

export default Button;
