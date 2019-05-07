import React from 'react';
import Form from './form';
import EditListTtitleStyles from './styles/EditListTitleStyles';

function EditListTitle(props) {
  return (
    <EditListTtitleStyles className={props.show ? '' : 'hide'}>
      <Form>
        <section className="form form-group">
          <input type="text" onChange={props.onChange} value={props.value} />
        </section>
      </Form>
    </EditListTtitleStyles>
  );
}

export default EditListTitle;
