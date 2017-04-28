import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class ButtonAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames(
      'button--action',
      this.props.modifiers[this.props.idx]
    );

    return (
      <button className={classes} type={this.props.type}
          aria-label={this.props.content}>
        <i className={this.props.className}></i>
        {this.props.text}
      </button>
    );
  }
}

ButtonAction.propTypes = {
  type: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
};

ButtonAction.defaultProps = {
  type: 'button',
  text: '',
  content: '',
  className: '',
  modifiers: 'button--action button--action__primary button--action__fav button--action__default button--action__facebook button--action__twitter'
};

export default ButtonAction;
