import React from 'react';
import Icon from './icon';
import OpenFormStyles from './styles/openFormStyles';

function OpenForm(props) {
  return (
    <OpenFormStyles>
      <Icon classIcon="add-icon" iconName="add" />
      <section className="area-title">
        <p className="title">{props.title}</p>
      </section>
    </OpenFormStyles>
  );
}

export default OpenForm;
