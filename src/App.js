import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import Login from './components/Login/Login.jsx';


const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <Routes>
        <Route path='/dialogs/*' element={<DialogsConteiner />} />
        <Route path='/profile*' element={<ProfileContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/users*' element={<UsersContainer />} />
        <Route path='/login*' element={<Login />} />
      </Routes>
    </div>

  );
}
export default App;
