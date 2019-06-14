import React from 'react';

function Button(props) {
  return (
    <section className="areabtn">
      <button> {props.children}</button>
    </section>
  );
}

export default Button;
