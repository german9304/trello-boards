import React from 'react';
import Button from './button';
import ClearIcon from './clearicon';

function AddListBtnArea(props) {
  return (
    <section id="add_cardbtn">
      <Button>{'Add List'}</Button>
      <ClearIcon />
    </section>
  );
}

export default AddListBtnArea;
