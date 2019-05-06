import React from 'react';
import Form from './form';
import AddCardBtnArea from './addcardbtnarea';
import AddCardFormStyles from './styles/addCardFormStyles';

function AddCardForm(props) {
  const { show, board } = props;
  return (
    <AddCardFormStyles
      className={show.show && board.id === show.id ? '' : 'hide'}
    >
      <Form>
        <section className="form form-group">
          <textarea placeholder="Enter title for card" rows="3" cols="33" />
        </section>
        <AddCardBtnArea onClick={() => props.onClick(0)} />
      </Form>
    </AddCardFormStyles>
  );
}

export default AddCardForm;
