import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import ContactList from "./components/contacts/contactlist/ContactList"

let App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} />
        <Route path={"/contact/list"} element={<ContactList />} />
      </Routes>

    </>
  );
}

export default App;
