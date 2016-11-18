import React, { PropTypes } from 'react';
import ScrollPrintPreview from '../../common/components/ScrollPrintPreview';
import TextInput from '../../common/components/TextInput';
import MultiTextInput from '../../multiTextInput/components/MultiTextInput';

const ScrollCreatorForm = (props) => {
  const { formData, onChangeSingle, onChangeMulti, addOnClickMulti, removeOnClickMulti } = props;

  let id = -1;
  return (
    <div>
      <div className="scrollCreatorPanel">
        {
          Object.keys(formData).map((fieldName) => {
            id++;
            if (typeof (formData[fieldName]) === 'string') {
              return (
                <TextInput
                  id={id}
                  key={id}
                  fieldName={fieldName}
                  fieldValue={formData[fieldName]}
                  onChange={onChangeSingle}
                />
              );
            }

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
          }
        )
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

ScrollCreatorForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onChangeSingle: PropTypes.func.isRequired,
  onChangeMulti: PropTypes.func.isRequired,
  addOnClickMulti: PropTypes.func.isRequired,
  removeOnClickMulti: PropTypes.func.isRequired,
};

export default ScrollCreatorForm;
