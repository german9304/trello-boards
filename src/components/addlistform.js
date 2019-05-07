import React from 'react';
import Form from './form';
import AddListBtnArea from './addlistbtnarea';
import AddListFormStyles from './styles/addListFormStyles';

function AddListForm(props) {
  return (
    <AddListFormStyles
      className={`board board-form ${props.show ? '' : 'hide'}`}
    >
      <Form onSubmit={props.onSubmit}>
        <section className="form form-group">
          <input type="text" placeholder="Enter title for List" />
        </section>
        <AddListBtnArea onClick={props.onClick} />
      </Form>
    </AddListFormStyles>
  );
}

export default AddListForm;
