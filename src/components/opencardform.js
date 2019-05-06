import React from 'react';
import OpenForm from './openform';
import OpenCardFormStyles from './styles/openCardFormStyles';

function OpenCardForm(props) {
  const { hide, board } = props;
  return (
    <OpenCardFormStyles className={hide ? 'hide' : ''} onClick={props.onClick}>
      <OpenForm title={props.title} />
    </OpenCardFormStyles>
  );
}

export default OpenCardForm;
