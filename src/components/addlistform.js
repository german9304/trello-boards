import React from 'react';
import Form from './form';
import AddListBtnArea from './addlistbtnarea';

function AddListForm() {
  return (
    <Form>
      <section className="form form-group">
        <input type="text" placeholder="Enter title for List" />
      </section>
      <AddListBtnArea />
    </Form>
  );
}

export default AddListForm;
