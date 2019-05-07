import React from 'react';
import useShow from '../customhooks/useshow';
import useInput from '../customhooks/useinput';

function ShowFormAreas({ board, dispatch, title, Open, Add }) {
  const { show, handleShow } = useShow(false);
  const { value, handleValue } = useInput('');
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    // dispatch();
    console.log(value);
  }
  return (
    <>
      <Open title={title} hide={show} onClick={handleClick} />
      <Add
        show={show}
        value={value}
        handleValue={handleValue}
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
    </>
  );
}

export default ShowFormAreas;
