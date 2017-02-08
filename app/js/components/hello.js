import React, {Component} from 'react';

export default class SayHello extends Component {
  render() {
    return (
      <h1>Hello, {this.props.username}!</h1>
    );
  }
}
