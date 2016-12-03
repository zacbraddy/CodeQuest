import React, { PropTypes } from 'react';
import ScrollCreatorForm from '../../scrollCreatorForm/components/ScrollCreatorForm';

require('../styles/scrollTemplateListItem.css');

const ScrollTemplateListItem = (props) => {
  const {
    index,
    handleToggleDetailClick,
    removeItem,
    createNewItemForMessageBody,
    removeItemFromMessageBody,
    changeSingleValue,
    changeMultiValue,
    formData,
  } = props;

  return (
    <div className="scroll-template-list-item">
      <div className="scroll-template-list-item-simple-detail">
        <button
          onClick={() => {
            handleToggleDetailClick(index);
          }}
        >
          <div className="scroll-template-list-item-content">
            <div className="grid-row">
              <div className="grid-cell">{formData.Their_Name}</div>
              <div className="grid-cell">{formData.Your_Name}</div>
            </div>
            <div className="scroll-template-list-item-overlay-resting" />
          </div>
        </button>
        <button
          className="scroll-template-list-item-delete-button btn btn-danger"
          onClick={() => {
            removeItem(index);
          }}
        >
          <i className="glyphicon glyphicon-remove" />
        </button>
      </div>
      {
        (index === props.rowDisplayingAdvancedDetail)
          ?
          (<div className="scroll-template-list-item-advanced-detail">
            <ScrollCreatorForm
              addOnClickMulti={
                (fieldName) => {
                  createNewItemForMessageBody(index, fieldName);
                }
              }
              removeOnClickMulti={
                (fieldName, id) => {
                  removeItemFromMessageBody(index, fieldName, id);
                }
              }
              onChangeSingle={
                (e) => {
                  changeSingleValue(index, e.target.id, e.target.value);
                }
              }
              onChangeMulti={
                (e) => {
                  changeMultiValue(index, e.target.id, e.target.value);
                }
              }
              formData={formData}
            />
          </div>)
          : ''
      }

    </div>
  );
};

ScrollTemplateListItem.propTypes = {
  formData: PropTypes.object.isRequired,
  handleToggleDetailClick: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  createNewItemForMessageBody: PropTypes.func.isRequired,
  removeItemFromMessageBody: PropTypes.func.isRequired,
  changeSingleValue: PropTypes.func.isRequired,
  changeMultiValue: PropTypes.func.isRequired,
  index: PropTypes.number,
  rowDisplayingAdvancedDetail: PropTypes.number,
};

export default ScrollTemplateListItem;
