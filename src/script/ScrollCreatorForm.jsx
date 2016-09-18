import React, { PropTypes, Component } from 'react';

class ScrollCreatorForm extends Component {
  constructor(props) {
    super(props);
    const initialState = {};
    Object.keys(props.fields).forEach(field => {
      if (props.fields[field] === 'single') initialState[field] = '';
      if (props.fields[field] === 'multi') initialState[field] = [''];
    });

    this.state = Object.assign({}, initialState);
  }

  createNewEntryForMulti(fieldName) {
    const newState = {};
    newState[fieldName] = this.state[fieldName].concat('');
    this.setState(newState);
  };

  removeEntryForMulti(fieldName, id) {
    const newState = {};
    newState[fieldName] = [];
    for (let i = 0; i < this.state[fieldName].length; i++) {
      if (i == id) continue;
      newState[fieldName].push(this.state[fieldName][i]);
    }
    this.setState(newState);
  }

  changeSingleValue(fieldName, e) {
    const newState = {};
    newState[fieldName] = e.target.value;
    this.setState(newState);
  }

  changeMultiValue(fieldName, subId, e) {
    const newState = {};
    newState[fieldName] = this.state[fieldName];
    newState[fieldName][subId] = e.target.value;
    this.setState(newState);
  }

  renderSingle(id, fieldName) {
    const humanReadableFieldName = fieldName.replace('_', ' ');
    return (
      <div key={id} className="form-group">
        <label htmlFor={`${fieldName}${id}`}>{humanReadableFieldName}</label>
        <input
          id={`${fieldName}${id}`}
          type="text"
          className="form-control"
          placeholder={humanReadableFieldName}
          value={this.state[fieldName]}
          onChange={this.changeSingleValue.bind(this, fieldName)}
        />
      </div>
    );
  }

  renderMulti(id, fieldName) {
    let subId = -1;
    const humanReadableFieldName = fieldName.replace('_', ' ');

    return (
      <div key={`${id}`} className="form-group">
        <label htmlFor={`${fieldName}${id}`}>
          {humanReadableFieldName}
        </label>
        <button className="btn btn-success btn-xs add-body-button" onClick={this.createNewEntryForMulti.bind(this, fieldName)}>
          <i className="glyphicon glyphicon-plus" />
        </button>
        <div id={`${fieldName}${id}`}>
        {
          this.state[fieldName].map(() => {
            subId++;
            return (
              <div className="input-group multi-field-input" key={`${fieldName}${id}-${subId}`}>
                <input
                  id={`${fieldName}${id}-${subId}`}
                  type="text"
                  className="form-control"
                  placeholder={`${humanReadableFieldName}`}
                  value={this.state[fieldName][subId]}
                  onChange={this.changeMultiValue.bind(this, fieldName, subId)}
                />
                <span className="input-group-btn">
                  <button className="btn btn-danger" onClick={this.removeEntryForMulti.bind(this, fieldName, subId)}>
                    <i className="glyphicon glyphicon-remove" />
                  </button>
                </span>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }

  render() {
    let id = -1;
    return (
      <div>
        <div className="scrollCreatorPanel">
          {
            Object.keys(this.state).map(fieldName => {
              id++;
              if (typeof(this.state[fieldName]) === 'string')
                return this.renderSingle(id, fieldName);
              else
                return this.renderMulti(id, fieldName);
            })
          }
        </div>
        <div className="scrollCreatorPanel">
          <strong>Output</strong>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

ScrollCreatorForm.propTypes = {
  fields: PropTypes.object.isRequired,
};

export default ScrollCreatorForm;
