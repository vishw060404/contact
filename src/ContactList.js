import React from 'react';

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <div>
      <h2 id='head1'>Contact List</h2>
      <div id='list'>
      <ul>
        {contacts.map((contact, index) => (
              <li key={index}>
          <div>
          <p><span>Name:</span> {contact.name}</p>
      <p><span>Email:</span> {contact.email}</p>
      <p><span>Phone No:</span> {contact.phone}</p>
            </div>
            <div>
              <button id='b1' onClick={() => editContact(contact)}>Edit</button>
              <button id='b2' onClick={() => deleteContact(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ContactList;
