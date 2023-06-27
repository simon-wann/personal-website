import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsChatText} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>simon460w@gmail.com</h5>
            <a href="mailto:simon460w@gmail.com">Send me an email</a>
          </article>

          <article className="contact__option">
            <BsChatText className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>347-553-4386</h5>
            <a href="tel:+3475534386">Call or text me</a>
          </article>

        </div>
        


        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact