import React from 'react';
import OpenForm from './openform';
import OpenListFormStyles from './styles/openListFormStyles';

function OpenFormList(props) {
  return (
    <OpenListFormStyles
      className={props.hide ? 'hide' : ''}
      onClick={props.onClick}
    >
      <OpenForm title={props.title} />
    </OpenListFormStyles>
  );
}

export default OpenFormList;
