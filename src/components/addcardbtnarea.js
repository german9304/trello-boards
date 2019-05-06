import React from 'react';
import Button from './button';
import Icon from './icon';
import AddBtnStyles from './styles/addBtnStyles';

function AddCardBtnArea(props) {
  return (
    <AddBtnStyles id="add_cardbtn">
      <Button>{'Add Card'}</Button>
      <Icon classIcon="clear-icon" iconName="clear" onClick={props.onClick} />
    </AddBtnStyles>
  );
}

export default AddCardBtnArea;
