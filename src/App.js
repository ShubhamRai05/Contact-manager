import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactList from "./components/contacts/contactlist/ContactList"
import AddContact from './components/contacts/addcontact/AddContact';
import ViewContact from './components/contacts/viewcontact/ViewContact';
import EditContact from './components/contacts/editcontact/EditContact';

let App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"contacts"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>

    </>
  );
}

export default App;
