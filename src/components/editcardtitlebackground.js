import React from 'react';
import CardEdit from './cardedit';
import EditCardTitle from './editcardtitle';
import EditCardTitleBackgroundStyles from './styles/editcardtitlebckndStyles';
import ShowEditAreas from './showeditareas';

function EditCardTitleBackground({ title }) {
  return (
    <EditCardTitleBackgroundStyles id="edit-title">
      <ShowEditAreas
        title={title}
        className="edit-section"
        Area={CardEdit}
        EditArea={EditCardTitle}
      />
    </EditCardTitleBackgroundStyles>
  );
}

export default EditCardTitleBackground;
