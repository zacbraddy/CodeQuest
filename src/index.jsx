/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollTemplateList from './scrollTemplateList/containers/ScrollTemplateList';

/* Vendor */
require('jquery');
require('bootstrap');
require('bootstrap-css'); // eslint-disable-line

/* Static Files */
require('./index.html');

/* To be refactored into a store in future tutorials */
const fields = {
  Their_Name: 'single',
  Message_Body: 'multi',
  Your_Name: 'single',
};

ReactDOM.render(
  <ScrollTemplateList fields={fields} />,
  document.getElementById('the-kingdom')
);
