import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
        <form>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='text' placeholder='Write your message here' />
            <button className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact