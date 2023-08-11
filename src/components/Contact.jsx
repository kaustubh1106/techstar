import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div class="contact-us-section">
  <h2>Contact Us</h2>
  <form class="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
    
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required/>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="8" required></textarea>
    
    <button type="submit">Send</button>
  </form>
</div>

  )
}

export default Contact