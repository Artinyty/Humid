import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {
  let path = '/dialogs/' + props.id;
  return <div className={s.dialoges}><NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink></div>

}



export default DialogItems;

