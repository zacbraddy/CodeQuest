import React, { PropTypes, Component } from 'react';
import ScrollCreatorForm from '../../scrollCreator/components/ScrollCreatorForm';

class ScrollCreator extends Component {
  constructor(props) {
    super(props);
    const initialState = {};
    Object.keys(props.fields).forEach((field) => {
      if (props.fields[field] === 'single') initialState[field] = '';
      if (props.fields[field] === 'multi') initialState[field] = [''];
    });

    this.state = Object.assign({}, initialState);
    this.changeSingleValue = this.changeSingleValue.bind(this);
    this.changeMultiValue = this.changeMultiValue.bind(this);
    this.createNewEntryForMulti = this.createNewEntryForMulti.bind(this);
    this.removeEntryForMulti = this.removeEntryForMulti.bind(this);
  }

  createNewEntryForMulti(fieldName) {
    const newState = {};
    newState[fieldName] = this.state[fieldName].concat('');
    this.setState(newState);
  }

  removeEntryForMulti(fieldName, id) {
    const newState = {};
    newState[fieldName] = [];
    for (let i = 0; i < this.state[fieldName].length; i++) {
      if (i === id) continue;
      newState[fieldName].push(this.state[fieldName][i]);
    }
    this.setState(newState);
  }

  changeSingleValue(e) {
    const newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  changeMultiValue(e) {
    const newState = {};
    const fieldNameParts = e.target.id.split('_');
    let fieldName = [];
    for (let i = 0; i < fieldNameParts.length - 1; i++) {
      fieldName = fieldName.concat(fieldNameParts[i]);
    }
    fieldName = fieldName.join('_');
    const subId = fieldNameParts[fieldNameParts.length - 1];
    newState[fieldName] = this.state[fieldName];
    newState[fieldName][subId] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <ScrollCreatorForm
        formData={this.state}
        onChangeSingle={this.changeSingleValue}
        onChangeMulti={this.changeMultiValue}
        addOnClickMulti={this.createNewEntryForMulti}
        removeOnClickMulti={this.removeEntryForMulti}
      />
    );
  }
}

ScrollCreator.propTypes = {
  fields: PropTypes.object.isRequired,
};

export default ScrollCreator;
