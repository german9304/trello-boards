import React from 'react';
import Form from './form';
import AddCardBtnArea from './addcardbtnarea';
import AddCardFormStyles from './styles/addCardFormStyles';

function AddCardForm(props) {
  return (
    <AddCardFormStyles>
      <Form>
        <section className="form form-group">
          <textarea placeholder="Enter title for card" rows="3" cols="33" />
        </section>
        <AddCardBtnArea />
      </Form>
    </AddCardFormStyles>
  );
}

export default AddCardForm;