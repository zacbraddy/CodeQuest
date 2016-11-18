import React, { PropTypes } from 'react';

const TextInput = (props) => {
  const { id, fieldName, fieldValue, onChange } = props;
  const humanReadableFieldName = fieldName.replace('_', ' ');
  return (
    <div key={id} className="form-group">
      <label htmlFor={`${fieldName}${id}`}>{humanReadableFieldName}</label>
      <input
        id={`${fieldName}`}
        type="text"
        className="form-control"
        placeholder={humanReadableFieldName}
        value={fieldValue}
        onChange={onChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
