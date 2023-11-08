import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messege from './Messege/Messege';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) => {
  // Handle form submission here
  console.log("Form values:", values);
}

const DialogsForm = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Messege message={m.message} key={m.id} id={m.id} />);
  let newMessagesBody = state.newMsgBody;

  let onSendMessengeClick = () => {
    props.sendMessenge();
  };

  let onNewMessengeChange = (e) => {
    let body = e.target.value;
    props.updateNewMessegeBody(body);
  };

  return (
    <div>
      {dialogsElements}
      {messagesElements}
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field type="text" name="textMsg" component="textarea" value={newMessagesBody} placeholder="Leave your MSG" />
            </div>
            <div>
              <button type="submit">Sent</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialoges}>
        <div className={s.dialogesItems}>
          <DialogsForm dialogsPage={props.dialogsPage} sendMessenge={props.sendMessenge} updateNewMessegeBody={props.updateNewMessegeBody} />
        </div>
        <div className={s.messages}>
          {props.dialogsPage.messages.map(m => <Messege message={m.message} key={m.id} id={m.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;



// import React from 'react';
// import s from './Dialogs.module.css';
// import DialogItems from './DialogItems/DialogItems';
// import Messege from './Messege/Messege';
// import { Form, Field } from 'react-final-form';

// const Dialogs = (props) => {
//   let state = props.dialogsPage;
//   let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);
//   let messagesElements = state.messages.map(m => <Messege message={m.message} key={m.id} id={m.id} />);
//   let newMessagesBody = state.newMsgBody;

//   let onSendMessengeClick = () => {
//     props.sendMessenge();
//   };

//   let onNewMessengeChange = (e) => {
//     let body = e.target.value;
//     props.updateNewMessegeBody(body);
//   }



//   return (
//     <div className={s.dialoges} >
//       <div className={s.dialogesItems}>
//         {dialogsElements}
//       </div>
//       <div className={s.messages}>
//         <div>{messagesElements}</div>

//       </div>
//       <AddMsgForm />
//     </div>
//   );
// };

// const AddMsgForm = (props) => {
//   return <form onSubmit={props.handleSubmit}>
//     <Field>
//       <div> <Field component={textarea} name={'newMessagesBody'} onChange={onNewMessengeChange} placeholder='Leave your MSG' /> </div>
//       <div> <button>Send</button> </div>
//     </Field>
//   </form >

// }
// export default Dialogs;