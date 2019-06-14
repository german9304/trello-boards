import React from 'react';

function Icon(props) {
  return (
    <section className={props.classIcon} onClick={props.onClick}>
      <span>
        <i className="material-icons">{props.iconName}</i>
      </span>
    </section>
  );
}

export default Icon;
