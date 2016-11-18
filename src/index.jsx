/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollCreator from './common/containers/ScrollCreator';

/* Vendor */
require('jquery');
require('bootstrap');
require('bootstrap-css'); // eslint-disable-line

/* Static Files */
require('./codeQuest/styles/codeQuest.css');
require('./scrollCreator/styles/scrollCreatorForm.css');
require('./index.html');

/* To be refactored into a store in future tutorials */
const fields = {
  Their_Name: 'single',
  Message_Body: 'multi',
  Your_Name: 'single',
};

ReactDOM.render(
  <ScrollCreator fields={fields} />,
  document.getElementById('the-kingdom')
);
