import React from 'react';
import CardEdit from './cardedit';
import EditCardTitle from './editcardtitle';
import EditCardTitleBackgroundStyles from './styles/editcardtitlebckndStyles';
import useAreas from '../customhooks/useareas';

function EditCardTitleBackground({ title, dispatch }) {
  const areas = useAreas(false, title, dispatch);
  function handleSubmit(e) {
    areas.handleSubmit(e);
    areas.handleShow();
  }

  function handleMouseEnter() {
    console.log('mouse enter');
  }

  function handleMouseLeave() {
    console.log('mouse leave');
  }
  return (
    <EditCardTitleBackgroundStyles id="edit-title">
      <CardEdit
        className="edit-section"
        hide={areas.show}
        title={title}
        onClick={areas.handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <EditCardTitle
        show={areas.show}
        onSubmit={handleSubmit}
        onChange={areas.handleValue}
        value={areas.value}
      />
    </EditCardTitleBackgroundStyles>
  );
}

export default EditCardTitleBackground;
