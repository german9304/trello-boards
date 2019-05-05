import React from 'react';

function Icon(props) {
  return (
    <section className={props.classIcon}>
      <span>
        <i class="material-icons">{props.iconName}</i>
      </span>
    </section>
  );
}

export default Icon;
