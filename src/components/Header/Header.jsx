import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return <header className={s.header}>
    <div className={s.header_loginBlock} >
      {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
      {/* {props.isAuth ? <img className={s.logo_img} src='https://i.pinimg.com/474x/09/eb/b6/09ebb61e771b6e3c4fd2557f7ee1adfc.jpg' alt='flowers' />
        : <NavLink to={'/login'}>Login</NavLink>} */}

    </div>
    <img className={s.header_img} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='flowers' />

  </header>;
}

export default Header;