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
      this.props.modifiers[this.props.idx]
    );

    return (
      <button className={classes} type={this.props.type}>
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
  modifiers: 'button--main button--primary button--secondary button--link button--facebook button--lg button--sm button--block button__is-fixed-to-bottom button__is-disabled button__is-loading button__has-icon'
};

export default Button;
