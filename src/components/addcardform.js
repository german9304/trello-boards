import React from 'react';
import Form from './form';
import AddCardBtnArea from './addcardbtnarea';

function AddCardForm() {
  return (
    <Form>
      <section className="form form-group">
        <textarea placeholder="Enter title for card" />
      </section>
      <AddCardBtnArea />
    </Form>
  );
}

export default AddCardForm;
