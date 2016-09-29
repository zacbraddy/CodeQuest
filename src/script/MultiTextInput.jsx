import React from 'react';

const MultiTextInput = (props) => {
  const {id, fieldName, fieldValue, onChange, addOnClick, removeOnClick} = props;
  let subId = -1;
  const humanReadableFieldName = fieldName.replace('_', ' ');

  return (
    <div key={`${id}`} className="form-group">
      <label htmlFor={`${fieldName}${id}`}>
        {humanReadableFieldName}
      </label>
      <button className="btn btn-success btn-xs add-body-button"
              onClick={() => {addOnClick(fieldName)}}>
        <i className="glyphicon glyphicon-plus"/>
      </button>
      <div id={`${fieldName}${id}`}>
        {
          fieldValue.map(val => {
            subId++;
            console.log(fieldValue);
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
                    <button className="btn btn-danger" onClick={(e) => removeOnClick(fieldName, subId)}>
                      <i className="glyphicon glyphicon-remove"/>
                    </button>
                  </span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default MultiTextInput;