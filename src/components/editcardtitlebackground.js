import React, { useState } from 'react';
import CardEdit from './cardedit';
import EditCardTitle from './editcardtitle';
import EditCardTitleBackgroundStyles from './styles/editcardtitlebckndStyles';
import useAreas from '../customhooks/useareas';

function EditCardTitleBackground({ title, dispatch, handleBackground }) {
  const areas = useAreas(false, title, dispatch);
  const [styles, setSyles] = useState({});
  const [showIcon, setShowIcon] = useState(false);

  function handleSubmit(e) {
    areas.handleSubmit(e);
    handleBackground();
    areas.handleShow();
  }

  function handleClick(e) {
    const { target } = e;
    const clientRect = target.getBoundingClientRect();
    const elStyles = {
      top: `${clientRect.top}px`,
      bottom: `${clientRect.bottom}px`,
      width: '230px',
      heigh: '90px',
    };
    setSyles(elStyles);
    areas.handleClick(e);
    handleBackground();
  }

  function handleMouseEnter() {
    setShowIcon(prev => !prev);
  }

  function handleMouseLeave() {
    setShowIcon(prev => !prev);
  }
  return (
    <EditCardTitleBackgroundStyles id="edit-title">
      <CardEdit
        className="edit-section"
        hide={areas.show}
        title={title}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        show={showIcon}
      />
      <EditCardTitle
        show={areas.show}
        onSubmit={handleSubmit}
        onChange={areas.handleValue}
        value={areas.value}
        styles={styles}
      />
    </EditCardTitleBackgroundStyles>
  );
}

export default EditCardTitleBackground;
