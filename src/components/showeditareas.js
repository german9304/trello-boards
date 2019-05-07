import React from 'react';
import useShow from '../customhooks/useshow';
import useInput from '../customhooks/useinput';

function ShowEditAreas({ title, dispatch, className, Area, EditArea }) {
  const { show, handleShow } = useShow(false);
  const { value, handleValue } = useInput(title);
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    // dispatch();
  }

  return (
    <>
      <Area
        className={className}
        hide={show}
        title={title}
        onClick={handleClick}
      />
      <EditArea
        show={show}
        onSubmit={handleSubmit}
        onChange={handleValue}
        value={value}
      />
    </>
  );
}

export default ShowEditAreas;
