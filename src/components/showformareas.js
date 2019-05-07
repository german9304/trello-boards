import React from 'react';
import useShow from '../customhooks/useshow';

function ShowFormAreas({ board, title, Open, Add }) {
  const { show, handleShow } = useShow(false);
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <>
      <Open title={title} hide={show} onClick={handleClick} />
      <Add show={show} onSubmit={handleSubmit} onClick={handleClick} />
    </>
  );
}

export default ShowFormAreas;
