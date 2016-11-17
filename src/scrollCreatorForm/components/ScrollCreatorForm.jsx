import React, { PropTypes } from 'react';
import TextInput from '../../common/TextInput';
import MultiTextInput from '../../MultiTextInput/components/MultiTextInput';

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
