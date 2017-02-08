var React = require('react');
var ReactDOM = require('react-dom');

// Component styles
require('../scss/garbaui.scss');

var SayHello = React.createClass({
  render: function() {
    return (
      <h3>Hello, {this.props.username} </h3>
    )
  }
});

ReactDOM.render(
  <SayHello username="Esteban"/>,
  document.getElementById('app')
);
