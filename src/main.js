var React = require('react');
var Spinner = require('spin.js');

var ReactSpinner = React.createClass({
  propTypes: {
    config: React.PropTypes.object,
    stopped: React.PropTypes.bool
  },

  componentDidMount: function() {
    this.spinner = new Spinner(this.props.config);
    this.spinner.spin(this.refs.container.getDOMNode());
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.stopped === true && !this.props.stopped) {
      this.spinner.stop();
    } else if (!newProps.stopped && this.props.stopped === true) {
      this.spinner.spin(this.refs.container.getDOMNode());
    }
  },

  componentWillUnmount: function() {
    this.spinner.stop();
  },

  render: function() {
    return (
      React.createElement("span", {ref: "container"})
    );
  }
});

module.exports = ReactSpinner;
