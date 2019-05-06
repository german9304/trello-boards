import React from 'react';
import OpenForm from './openform';
import OpenCardFormStyles from './styles/openCardFormStyles';

function OpenCardForm(props) {
  const { hide, board } = props;
  return (
    <OpenCardFormStyles
      className={hide.show && board.id === hide.id ? 'hide' : ''}
      onClick={() => props.onClick(props.board.id)}
    >
      <OpenForm title={props.title} />
    </OpenCardFormStyles>
  );
}

export default OpenCardForm;
