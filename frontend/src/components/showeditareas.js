import React from 'react';
import useAreas from '../customhooks/useareas';

function ShowEditAreas({ title, dispatch, className, Area, EditArea }) {
  const areas = useAreas(false, title, dispatch);

  function handleSubmit(e) {
    areas.handleSubmit(e);
    areas.handleShow();
  }

  return (
    <>
      <Area
        className={className}
        hide={areas.show}
        title={title}
        onClick={areas.handleClick}
      />
      <EditArea
        show={areas.show}
        onSubmit={handleSubmit}
        onChange={areas.handleValue}
        value={areas.value}
      />
    </>
  );
}

export default ShowEditAreas;
