import React from 'react';
import Button from './button';
import ClearIcon from './clearicon';
import AddBtnStyles from './styles/addBtnStyles';

function AddCardBtnArea(props) {
  return (
    <AddBtnStyles id="add_cardbtn">
      <Button>{'Add Card'}</Button>
      <ClearIcon />
    </AddBtnStyles>
  );
}

export default AddCardBtnArea;
