import React from 'react';
import OpenForm from './openform';
import OpenCardFormStyles from './styles/openCardFormStyles';

function OpenCardForm(props) {
  return (
    <OpenCardFormStyles
      className={props.hide ? 'hide' : ''}
      onClick={() => props.onClick(props.board.id)}
    >
      <OpenForm title={props.title} />
    </OpenCardFormStyles>
  );
}

export default OpenCardForm;
