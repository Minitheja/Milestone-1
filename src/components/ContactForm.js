
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-form">
      <h2>Feedback</h2>
      {submitted ? (
        <p>Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br></br>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br></br>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          /><br></br>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
