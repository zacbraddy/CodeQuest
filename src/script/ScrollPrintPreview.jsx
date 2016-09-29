import React from 'react';
import CodeQuest from './CodeQuest';

const ScrollPrintPreview = (props) => {
  const {formData} = props;
  return (
    <div>
      <strong>Print Preview</strong>
      <CodeQuest
        {...formData}
      />
    </div>
  );
};

export default ScrollPrintPreview;