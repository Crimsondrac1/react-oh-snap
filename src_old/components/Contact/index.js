import React, { useState } from 'react';

function ContactForm() {
    const { name, email, message } = formState;
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
      }
      
      console.log(formState);

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
