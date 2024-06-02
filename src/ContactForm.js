import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editContact, contactToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      editContact({ ...contactToEdit, name, email, phone });
    } else {
      addContact({ name, email, phone });
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div id='total'>
    <form onSubmit={handleSubmit} id='form'>
      <h3 id='head2'>Contact</h3>
      <input id='box'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input  id='box'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input id='box'
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button id='bt' type="submit">{contactToEdit ? 'Update' : 'Add'} Contact</button>
    </form>
    </div>
  );
};

export default ContactForm;
