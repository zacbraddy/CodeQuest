import React from 'react';
import ScrollPrintPreview from './ScrollPrintPreview';
import TextInput from './TextInput';
import MultiTextInput from './MultiTextInput';

const ScrollCreatorForm = (props) =>
{
  const { formData, onChangeSingle, onChangeMulti, addOnClickMulti, removeOnClickMulti } = props;

  let id = -1;
  return (
    <div>
      <div className="scrollCreatorPanel">
        {
          Object.keys(formData).map(fieldName => {
            id++;
            if (typeof(formData[fieldName]) === 'string')
              return (
                <TextInput
                  id={id}
                  key={id}
                  fieldName={fieldName}
                  fieldValue={formData[fieldName]}
                  onChange={onChangeSingle}
                />
              );
            else
              return (
                <MultiTextInput
                  id={id}
                  key={id}
                  fieldName={fieldName}
                  fieldValue={formData[fieldName]}
                  onChange={onChangeMulti}
                  addOnClick={addOnClickMulti}
                  removeOnClick={removeOnClickMulti}
                />
              );
          })
        }
      </div>
      <div className="scrollCreatorPanel">
        <ScrollPrintPreview
          formData={formData}
        />
      </div>
    </div>
  );
};

export default ScrollCreatorForm;
