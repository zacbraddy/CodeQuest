import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../styles/multiTextInput.css');

const MultiTextInput = (props) => {
  const { id, fieldName, fieldValue, onChange, addOnClick, removeOnClick } = props;
  let subId = -1;
  const humanReadableFieldName = fieldName.replace('_', ' ');

  return (
    <div key={`${id}`} className="form-group">
      <label htmlFor={`${fieldName}${id}`}>
        {humanReadableFieldName}
      </label>
      <button
        className="btn btn-success btn-xs add-body-button"
        onClick={() => addOnClick(fieldName)}
      >
        <i className="glyphicon glyphicon-plus" />
      </button>
      <div id={`${fieldName}${id}`}>
        <ReactCSSTransitionGroup
          transitionName="multi-text-input-items"
          transitionEnterTimeout={500}
          transitionEnter
          transitionLeaveTimeout={500}
          transitionLeave
        >
          {
            fieldValue.map((val) => {
              subId++;
              const boundRemoveClick = removeOnClick.bind(this, fieldName, subId);
              return (
                <div className="input-group multi-field-input" key={`${fieldName}${id}-${subId}`}>
                  <input
                    id={`${fieldName}_${subId}`}
                    type="text"
                    className="form-control"
                    placeholder={`${humanReadableFieldName}`}
                    value={val}
                    onChange={onChange}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-danger"
                      onClick={boundRemoveClick}
                    >
                      <i className="glyphicon glyphicon-remove" />
                    </button>
                  </span>
                </div>
              );
            })
          }
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
};

MultiTextInput.propTypes = {
  id: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  addOnClick: PropTypes.func.isRequired,
  removeOnClick: PropTypes.func.isRequired,
};

export default MultiTextInput;
