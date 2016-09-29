import React from 'react';

const CodeQuest = (props) => {
  const { Their_Name, Message_Body, Your_Name } = props;

  let id = -1;
  return (
    <div>
      <div className="scroll">
        <div className="greeting">Hello {Their_Name}</div>
        {
          Message_Body.map(textItem => {
            id++;
            return (<div key={id} className="message-body">{textItem}</div>);
          })
        }
        <div className="closing">
          <div>{Your_Name}</div>
          <div>The Reactionary</div>
        </div>
      </div>
    </div>
  );
};

export default CodeQuest;