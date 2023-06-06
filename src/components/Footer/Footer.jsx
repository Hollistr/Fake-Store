import React from 'react'
import './Footer.css'
import { AiFillHeart } from "react-icons/ai";

//AiFillHeart

function Footer() {
  return (
    <div className='footer-container'>
        <p>Made with <AiFillHeart /> by Chris Hollis</p>
        <a href='/contact' className='contact-btn'>Contact Us</a>
    </div>
  )
}

export default Footer