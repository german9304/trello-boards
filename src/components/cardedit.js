import React from 'react';

function CardEdit({
  hide,
  className,
  title,
  onClick,
  onMouseLeave,
  onMouseEnter,
  show,
}) {
  const cond = hide ? `${className} hide` : `${className}`;
  return (
    <section
      className={cond}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <section className="card-title">
        <p className="title"> {title}</p>
      </section>
      <section
        className={show ? `edit-icon ` : `edit-icon hide`}
        onClick={onClick}
      >
        <span>
          <i className="material-icons">edit</i>
        </span>
      </section>
    </section>
  );
}

export default CardEdit;
