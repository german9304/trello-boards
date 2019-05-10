import React from 'react';
import Form from './form';
import Button from './button';
import EditCardTitleStyes from './styles/editCardTitleStyles';

function EditCardTitle(props) {
  return (
    <EditCardTitleStyes className={props.show ? '' : 'hide'}>
      <Form>
        <section className="form form-group">
          <textarea type="text" value={props.value} onChange={props.onChange} />
        </section>
        <Button> {'save'}</Button>
      </Form>
    </EditCardTitleStyes>
  );
}

export default EditCardTitle;
