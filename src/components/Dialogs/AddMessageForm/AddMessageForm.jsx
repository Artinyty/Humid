import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FormsControls/FormsControls.js';
import { maxLehgthCreator, required } from '../../utils/validation/validators.js';

let maxLength50 = maxLehgthCreator(50);

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          name='newMsgText'
          validate={[required, maxLength50]}
          placeholder='Leave your MSG' />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);




