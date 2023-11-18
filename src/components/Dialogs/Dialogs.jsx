import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messege from './Messege/Messege';
import { Redirect } from 'react-router/cjs/react-router.min.js';
import { reduxForm, Field } from 'redux-form'

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Messege message={m.message} key={m.id} id={m.id} />);
  let newMsgBody = state.newMsgBody;

  let addNewMessage = (values) => {
    props.sendMessenge(values.newMsgBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.dialoges} >
      <div className={s.dialogesItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMassegeFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMassegeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMsgBody' placeholder='Leave your MSG' />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
}

const AddMassegeFormRedux = reduxForm({ form: 'dialogAddMassegeForm' })(AddMassegeForm);



export default Dialogs;



// const AddMassegeForm = () => (
//   <Form
//     render={({ handleSubmit }) => (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <Field type="text" placeholder="Leave your MSG" name={'Login'} component={'textarea'} />
//           </div>

//           <div>
//             <button onClick={onSendMessengeClick}>send</button> {/* Use "submit" instead of "onsubmit" for button type */}
//           </div>
//         </div>
//       </form>
//     )}
//   />
// )