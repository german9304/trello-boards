import React from 'react';
import Button from './button';
import ClearIcon from './clearicon';
import AddBtnStyles from './styles/addBtnStyles';

function AddListBtnArea(props) {
  return (
    <AddBtnStyles id="add_Listbtn">
      <Button>{'Add List'}</Button>
      <ClearIcon />
    </AddBtnStyles>
  );
}

export default AddListBtnArea;
