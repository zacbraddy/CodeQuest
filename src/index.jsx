import React from 'react';
import ReactDOM from 'react-dom';
// import CodeQuest from './script/codeQuest';
import ScrollCreatorForm from './script/ScrollCreatorForm';

/* Vendor */
require('jquery');
require('bootstrap');
require('bootstrap-css');

/* Static Files */
require('./css/codeQuest.css');
require('./css/scrollCreatorForm.css');
require('./index.html');

/* To be refactored into a store in future tutorials */
const fields = {
  Their_Name: 'single',
  Message_Body: 'multi',
  Your_Name: 'single',
};

ReactDOM.render(
  <ScrollCreatorForm fields={fields} />,
  document.getElementById('the-kingdom')
);