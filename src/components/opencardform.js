import React from 'react';
import OpenForm from './openform';
import OpenCardFormStyles from './styles/openCardFormStyles';

function OpenCardForm(props) {
  return (
    <OpenCardFormStyles>
      <OpenForm title={props.title} />
    </OpenCardFormStyles>
  );
}

export default OpenCardForm;
