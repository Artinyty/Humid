import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import * as reactRouterMinJs from 'react-router/cjs/react-router.min.js';
import AddMessageForm from './AddMessageForm/AddMessageForm.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
  // eslint-disable-next-line no-unused-vars
  let newMsgBody = state.newMsgBody;


  let addNewMessage = (values) => {
    props.sendMessenge(values.newMsgBody)
  }


  if (!props.isAuth) return <reactRouterMinJs.Redirect to={'/login'} />
  return (
    <div className={s.dialoges} >
      <div className={s.dialogesItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;



