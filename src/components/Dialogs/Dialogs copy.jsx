import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messege from './Messege/Messege';

const Dialogs = (props) => {
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
  }



  return (
    <div className={s.dialoges} >
      <div className={s.dialogesItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div> <textarea value={newMessagesBody} onChange={onNewMessengeChange} placeholder='Leave your MSG'></textarea> </div>
        <div> <button onClick={onSendMessengeClick}>send</button> </div>
      </div>
    </div>
  );
};

export default Dialogs;

