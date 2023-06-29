import React, {useContext} from 'react'
import './Contact.css'
import { ThemeContext } from '../../Context/ThemeContext'

function Contact() {
  // change to use global state
  // NOTE { } not [ ]
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?'contact-container contact-container-dark':'contact-container'}>
        <h1>Contact Us</h1>
        <form className='form-container'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='text' placeholder='Write your message here' />
            <button className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact