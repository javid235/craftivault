import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import insta from '../assets/insta.svg'
import behance from '../assets/behance.svg'
import facebook from '../assets/facebook.svg'
import { motion } from 'motion/react'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_aw2wcmn', // Replace with your EmailJS service ID
        'template_0ll83ia', // Replace with your EmailJS template ID
        form.current,
        'b9xGR5nQ47tM4uXAV' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text)
          setStatus('Email sent successfully!')
          setTimeout(() => {
            setStatus('')
          }, 5000)
        },
        (error) => {
          console.error(error.text)
          setStatus('Failed to send email. Please try again.')
          setTimeout(() => {
            setStatus('')
          }, 5000)
        }
      )
    e.target.reset()
  }
  return (
    <div className='contact-cont'>
      <div className='contact'>
        <h1>Contact</h1>
        <div className='contact-form'>
          <form className='form-cont' ref={form} onSubmit={sendEmail}>
            <input
              className='input-form'
              type='text'
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              className='input-form'
              type='email'
              placeholder='Email'
              name='user_email'
              required
            />
            <textarea
              rows={7}
              className='input-form'
              type='text'
              placeholder='Project Details'
              name='project_details'
              required
            />
            <input
              className='input-form'
              type='text'
              placeholder='Budget'
              name='budget'
              required
            />
            <button className='submit-btn' type='submit'>
              Submit
            </button>
            {status && (
              <p style={{ color: 'white' }}>
                {status} <br />
                Thank you for Reaching out
                <br />
                We will contact you soon!
              </p>
            )}
          </form>
          <hr />
          <div className='get-in-touch'>
            <p className='get-title'>get in touch</p>
            <p className='email'>craftivault.info@gmail.com</p>
            <div className='contact-socials'>
              <a href='https://www.instagram.com/craftivault/' target='_blank'>
                <img src={insta} alt='' />
              </a>
              <a
                href='https://www.behance.net/craftivaultDesign'
                target='_blank'
              >
                <img src={behance} alt='' />
              </a>
              <a href='' target='_blank'>
                <img src={facebook} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
