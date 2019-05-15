import React from 'react';
import Form from './form';
import Button from './button';
import EditCardTitleStyes from './styles/editCardTitleStyles';

function EditCardTitle(props) {
  console.log(props.styles);
  return (
    <EditCardTitleStyes
      className={props.show ? '' : 'hide'}
      style={props.styles}
    >
      <Form onSubmit={props.onSubmit}>
        <section className="form form-group">
          <textarea
            type="text"
            value={props.value}
            rows="4"
            onChange={props.onChange}
          />
        </section>
        <Button> {'save'}</Button>
      </Form>
    </EditCardTitleStyes>
  );
}

export default EditCardTitle;
