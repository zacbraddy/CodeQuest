var React = require('react');
var ReactDOM = require('react-dom');

var CodeQuest = React.createClass({
  getInitialState: function getInitialState() {
    return { name: 'Friend' };
  },
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <div className="scroll">
          <div>Hello {this.state.name}</div>
          <div>I'd like to invite you on a wondrous adventure towards {'\r\n'} the grok of ReactJs. Will you join me?</div>
          <div>Zac Braddy</div>
          <div>The Reactionary</div>
        </div>
      </div>
    );
  },
  handleChange: function(e) {
    this.setState({name: e.target.value});
  }
});

ReactDOM.render(
  <CodeQuest />,
  document.getElementById('the-kingdom')
);