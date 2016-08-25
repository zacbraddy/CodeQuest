
var CodeQuest = React.createClass({
  getInitialState: function getInitialState() {
    return { name: 'Friend' };
  },
  render: function() {
    return React.createElement('div', null,
      React.createElement('input', {type: 'text', onChange: this.handleChange}),
      React.createElement('div', {className: 'scroll'},
        React.createElement('div', null, 'Hello ', this.state.name),
        React.createElement('div', null, 'I\'d like to invite you on a wonderous adventure towards the grok of ReactJS. Will you join me?'),
        React.createElement('div', null, 'Zac Braddy'),
        React.createElement('div', null, 'The Reactionary')
      )
    );
  },
  handleChange: function(e) {
    this.setState({name: e.target.value});
  }
});

ReactDOM.render(
  React.createElement(CodeQuest),
  document.getElementById('the-kingdom')
)