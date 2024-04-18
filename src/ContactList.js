// ContactList.js
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div>
      <h2 id='head1'>Contacts</h2>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;
