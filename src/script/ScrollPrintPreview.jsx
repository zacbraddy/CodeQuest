import React, { PropTypes } from 'react';
import CodeQuest from './CodeQuest';

const ScrollPrintPreview = (props) => {
  const { formData } = props;
  return (
    <div>
      <strong>Print Preview</strong>
      <CodeQuest
        {...formData}
      />
    </div>
  );
};

ScrollPrintPreview.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default ScrollPrintPreview;
