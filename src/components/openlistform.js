import React from 'react';
import OpenForm from './openform';
import OpenListFormStyles from './styles/openListFormStyles';

function OpenFormList(props) {
  return (
    <OpenListFormStyles>
      <OpenForm title={props.title} />
    </OpenListFormStyles>
  );
}

export default OpenFormList;
