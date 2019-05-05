import React from 'react';
import Button from './button';
import Icon from './icon';
import AddBtnStyles from './styles/addBtnStyles';

function AddListBtnArea(props) {
  return (
    <AddBtnStyles id="add_Listbtn">
      <Button>{'Add List'}</Button>
      <Icon classIcon="clear-icon" iconName="clear" />
    </AddBtnStyles>
  );
}

export default AddListBtnArea;
