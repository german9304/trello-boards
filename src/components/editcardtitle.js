import React from 'react';
import Form from './form';
import Button from './button';

function EditCardTitle() {
  return (
    <Form>
      <section className="form form-group">
        <textarea type="text" value="" />
      </section>
      <Button> {'save'}</Button>
    </Form>
  );
}

export default EditCardTitle;
