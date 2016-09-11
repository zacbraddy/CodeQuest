import React, { Component } from 'react';

class CodeQuest extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Friend' };
    this.handleChange = this.handleChange.bind(this);

    this.scrollData = [
      'I\'d like to invite you on a wondrous adventure towards \r\n the grok of ReactJs. Will you join me?',
      'Zac Braddy',
      'The Reactionary',
    ];
  }

  render() {
    const { handleChange, scrollData } = this;
    const { name } = this.state;

    return (
      <div>
        <input type="text" onChange={handleChange} />
        <div className="scroll">
          <div>Hello {name}</div>
          {
            scrollData.map(textItem => {
              return (<div>{textItem}</div>);
            })
          }
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }
}

export default CodeQuest;