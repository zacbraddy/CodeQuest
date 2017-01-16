import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollTemplateListItem from '../components/ScrollTemplateListItem';

require('../styles/scrollTemplateList.css');

class ScrollTemplateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          Your_Name: 'Zac Braddy',
          Message_Body: ['I invite you to be a code-venturer'],
          Their_Name: 'Other Guy',
        },
      ],
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleToggleDetailClick = this.handleToggleDetailClick.bind(this);
    this.createNewEntryForMulti = this.createNewEntryForMulti.bind(this);
    this.removeEntryForMulti = this.removeEntryForMulti.bind(this);
    this.changeSingleValue = this.changeSingleValue.bind(this);
    this.changeMultiValue = this.changeMultiValue.bind(this);
  }

  handleAddClick() {
    const data = this.state.data;
    data.push(
      {
        Your_Name: `<<new${data.length}>>`,
        Message_Body: [`<<new${data.length}>>`],
        Their_Name: `<<new${data.length}>>`,
      }
    );

    this.setState({
      data,
    });
  }

  handleRemoveClick(indexToDelete) {
    const data = this.state.data;
    data.splice(indexToDelete, 1);
    let rowDisplayingAdvancedDetail = this.state.rowDisplayingAdvancedDetail;
    if (rowDisplayingAdvancedDetail === indexToDelete
      || rowDisplayingAdvancedDetail > this.state.data.length - 1) {
      rowDisplayingAdvancedDetail = -1;
    }

    this.setState({
      data,
      rowDisplayingAdvancedDetail,
    });
  }

  handleToggleDetailClick(indexToToggle) {
    if (indexToToggle !== this.state.rowDisplayingAdvancedDetail) {
      this.setState({
        rowDisplayingAdvancedDetail: indexToToggle,
      });
    } else {
      this.setState({ rowDisplayingAdvancedDetail: -1 });
    }
  }

  createNewEntryForMulti(index, fieldName) {
    const newState = Object.assign({}, this.state);
    newState.data[index][fieldName] = this.state.data[index][fieldName].concat('');
    this.setState(newState);
  }

  removeEntryForMulti(index, fieldName, id) {
    const newState = Object.assign({}, this.state);
    newState.data[index][fieldName].splice(id, 1);
    this.setState(newState);
  }

  changeSingleValue(index, fieldName, newValue) {
    const newState = Object.assign({}, this.state);
    newState.data[index][fieldName] = newValue;
    this.setState(newState);
  }

  changeMultiValue(index, fieldId, newValue) {
    const newState = Object.assign({}, this.state);
    const fieldNameParts = fieldId.split('_');
    let fieldName = [];
    for (let i = 0; i < fieldNameParts.length - 1; i++) {
      fieldName = fieldName.concat(fieldNameParts[i]);
    }
    fieldName = fieldName.join('_');
    const subId = fieldNameParts[fieldNameParts.length - 1];
    newState.data[index][fieldName] = this.state.data[index][fieldName];
    newState.data[index][fieldName][subId] = newValue;
    this.setState(newState);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="scroll-template-list"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="scroll-template-list-resting">
          <div className="grid-header grid-row">
            <div className="grid-cell">Their Name</div>
            <div className="grid-cell">Your Name</div>
            <div className="end-of-row-header-spacer" />
          </div>
          <ReactCSSTransitionGroup
            transitionName="scroll-template-list-items"
            transitionEnterTimeout={500}
            transitionEnter
            transitionLeaveTimeout={500}
            transitionLeave
          >
            {
              this.state.data.map((d, idx) =>
                (
                  <ScrollTemplateListItem
                    key={idx}
                    formData={d}
                    index={idx}
                    rowDisplayingAdvancedDetail={this.state.rowDisplayingAdvancedDetail}
                    handleToggleDetailClick={this.handleToggleDetailClick}
                    removeItem={this.handleRemoveClick}
                    createNewItemForMessageBody={this.createNewEntryForMulti}
                    changeSingleValue={this.changeSingleValue}
                    changeMultiValue={this.changeMultiValue}
                    removeItemFromMessageBody={this.removeEntryForMulti}
                  />
                )
              )
            }
          </ReactCSSTransitionGroup>
          <button
            className="scroll-template-list-add-button scroll-template-list-item
                        glyphicon
                        glyphicon-plus btn btn-success"
            onClick={this.handleAddClick}
          />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ScrollTemplateList;
