import React from 'react';

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

export default TextInput;