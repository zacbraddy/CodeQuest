import React, { PropTypes } from 'react';

const CodeQuest = (props) => {
  const { Their_Name, Message_Body, Your_Name } = props;

  let id = -1;
  /* eslint-disable camelcase */
  return (
    <div>
      <div className="scroll">
        <div className="greeting">Hello {Their_Name}</div>
        {
          Message_Body.map((textItem) => {
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
  /* eslint-enable camelcase */
};

CodeQuest.propTypes = {
  Their_Name: PropTypes.string.isRequired,
  Message_Body: PropTypes.array.isRequired,
  Your_Name: PropTypes.string.isRequired,
};

export default CodeQuest;
