import React from 'react';

function CardEdit({ hide, className, title, onClick }) {
  const cond = hide ? `${className} hide` : `${className}`;
  return (
    <section className={cond}>
      <section className="card-title">
        <p className="title"> {title}</p>
      </section>
      <section className="edit-icon" onClick={onClick}>
        <span>
          <i className="material-icons">edit</i>
        </span>
      </section>
    </section>
  );
}

export default CardEdit;
