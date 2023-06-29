import React, {useContext} from 'react'
import './Footer.css'
import { AiFillHeart } from "react-icons/ai"
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'

//AiFillHeart

function Footer() {
  // create a variable for darkMode
  // const darkMode = false
  // create state for darkMode
  // const [darkMode, setDarkMode] = React.useState(false)

  // change to use global state
  // NOTE { } not [ ]
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?'footer-container footer-dark':'footer-container'}>
      <div>
        <p>Made with <AiFillHeart /> by Chris Hollis</p>
        <Link to='/contact' className='contact-btn'>Contact Us</Link>
      </div>
      <div>
        <button className={darkMode?'theme-btn theme-btn-dark':'theme-btn'} 
        onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode?"Light Mode" : "Dark Mode"
          }

        </button>
      </div>
    </div>
  )
}

export default Footer