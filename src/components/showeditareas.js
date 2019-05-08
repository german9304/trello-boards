import React from 'react';
import useAreas from '../customhooks/useareas';

function ShowEditAreas({ title, dispatch, className, Area, EditArea }) {
  const areas = useAreas(false, title, dispatch);

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
        onSubmit={areas.handleSubmit}
        onChange={areas.handleValue}
        value={areas.value}
      />
    </>
  );
}

export default ShowEditAreas;
