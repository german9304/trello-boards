import React from 'react';
import Form from './form';
import AddListBtnArea from './addlistbtnarea';
import AddListFormStyles from './styles/addListFormStyles';

function AddListForm() {
  return (
    <AddListFormStyles className="board board-form">
      <Form>
        <section className="form form-group">
          <input type="text" placeholder="Enter title for List" />
        </section>
        <AddListBtnArea />
      </Form>
    </AddListFormStyles>
  );
}

export default AddListForm;
