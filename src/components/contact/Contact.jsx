import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsChatText} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_01oldjf', 'template_30lfyhg', form.current, 'gxycEc9KYstn-t_-4')
     
    e.target.reset()
  };

  return (
    <section id='contact'>

      <div className="contact-block">


      <h2>Contact Me</h2>

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
        


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

      </div>
    </section>
  )
}

export default Contact