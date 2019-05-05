import React from 'react';
import Button from './button';
import ClearIcon from './clearicon';

function AddCardBtnArea(props) {
  return (
    <section id="add_cardbtn">
      <Button>{'Add Card'}</Button>
      <ClearIcon />
    </section>
  );
}

export default AddCardBtnArea;
