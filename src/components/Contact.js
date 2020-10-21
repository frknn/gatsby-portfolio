import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-elements">
          <div className="contact-links">
            <a target="_blank" rel="noopener noreferrer" aria-label="Linkedin Profile Link" href="https://www.linkedin.com/in/furkansetbasi/"><FaLinkedin className="contact-links__square-link" /></a>
            <span className="contact-links__email">frknstbs<FaAt className="contact-links__at-symbol" />gmail.com</span>
            <a target="_blank" rel="noopener noreferrer" aria-label="Github Profile Link" href="https://github.com/frknn"><FaGithubSquare className="contact-links__square-link" /></a>
          </div>
          <form className="contact-form" name="message" method="POST" action="/thanks" data-netlify="true" data-netlify-honeypot="spam-prevention">
            <label htmlFor="spam-prevention" hidden>
              Spam prevention, do not fill this area!
              <input type="hidden" id="spam-prevention" name="spam-prevention" />
            </label>
            <h2 className="contact-form__title">Leave a message!</h2>
            <input type="hidden" name="form-name" value="message" />
            <label className="contact-form__label" htmlFor="visitorName">
              Name:
          <br />
              <input className="contact-form__name" type="text" id="visitorName" name="visitorName" required />
            </label>
            <label className="contact-form__label" htmlFor="visitorEmail">
              Email:
          <br />
              <input className="contact-form__email" type="email" id="visitorEmail" name="visitorEmail" required />
            </label>
            <label className="contact-form__label" htmlFor="visitorMessage">
              Message:
          <br />
              <textarea className="contact-form__message" name="visitorMessage" id="visitorMessage"></textarea>
            </label>
            <button className="contact-form__submit" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
