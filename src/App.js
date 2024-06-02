import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  // Load contacts from local storage on component mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  // Save contacts to local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact === contactToEdit ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setContactToEdit(null);
  };

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1 id='head'>Contact Management System</h1>
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        contactToEdit={contactToEdit}
      />
      <ContactList
        contacts={contacts}
        editContact={handleEditContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
