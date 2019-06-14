import React from 'react';
// import useShow from '../customhooks/useshow';
// import useInput from '../customhooks/useinput';
import useAreas from '../customhooks/useareas';

function ShowFormAreas({ board, dispatch, title, Open, Add }) {
  const areas = useAreas(false, '', dispatch);
  return (
    <>
      <Open title={title} hide={areas.show} onClick={areas.handleClick} />
      <Add
        show={areas.show}
        value={areas.value}
        handleValue={areas.handleValue}
        onSubmit={areas.handleSubmit}
        onClick={areas.handleClick}
      />
    </>
  );
}

export default ShowFormAreas;
