/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
// import ScrollCreator from './script/ScrollCreator';
import ScrollTemplateList from './scrollTemplateList/components/ScrollTemplateList';

/* Vendor */
require('jquery');
require('bootstrap');
require('bootstrap-css'); // eslint-disable-line

/* Static Files */
require('./codeQuest/styles/codeQuest.css');
require('./scrollCreatorForm/styles/scrollCreatorForm.css');
require('./index.html');

/* To be refactored into a store in future tutorials */
/* const fields = {
  Their_Name: 'single',
  Message_Body: 'multi',
  Your_Name: 'single',
}; */

ReactDOM.render(
  <ScrollTemplateList />,
  document.getElementById('the-kingdom')
);
