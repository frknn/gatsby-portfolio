import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/furkansetbasi/"><FaLinkedin className="contact-links__square-link" /></a>
          <span className="contact-links__email">frknstbs<FaAt className="contact-links__at-symbol" />gmail.com</span>
          <a href="https://github.com/frknn"><FaGithubSquare className="contact-links__square-link" /></a>
        </div>
      </div>
      <form name="message" method="POST" netlify>
        <label htmlFor="Your message: ">
          <input type="text" name="visitorMessage" />
          <button type="submit">Send</button>
        </label>
      </form>
    </section>
  )
}

export default Contact
