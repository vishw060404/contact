// ContactItem.js
import React from 'react';

function ContactItem({ contact, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(contact);
  };

  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div id='list'>
      <p><span>Name:</span> {contact.name}</p>
      <p><span>Email:</span> {contact.email}</p>
      <p><span>Phone No:</span>{contact.phone}</p>
      <div id='butt'>
      <button id='b1' onClick={handleEdit}>Edit</button>
      <button id='b2' onClick={handleDelete}>Delete</button>

      </div>
      <hr />
    </div>
  );
}

export default ContactItem;