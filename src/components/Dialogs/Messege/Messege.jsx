import React from 'react';
import s from './../Dialogs.module.css'




const Messege = (props) => {

  return (
    <div>
      <div className={s.dialoges}>{props.message}
      </div>

    </div>
  );


}


export default Messege;

