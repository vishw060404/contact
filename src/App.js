// App.js
import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import './style.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (editedContact) => {
    setContacts(contacts.map(contact => (contact.id === editedContact.id ? editedContact : contact)));
    setEditingContact(null);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1 id='head'>Contact Management Software</h1>
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        editingContact={editingContact}
      />
<ContactList
  contacts={contacts}
  onEdit={setEditingContact}
  onDelete={deleteContact}
/>
    </div>
  );
}

export default App;
