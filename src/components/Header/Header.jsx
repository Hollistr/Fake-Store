import React, { useContext } from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'


//AiOutlineShoppingCart

function Header() {
    // change to use global state
    // NOTE { } not [ ]
    const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?'header-container header-dark':'header-container'}>
        <Link to='/'>Fake Store</Link>
        <Link to='/checkout'><AiOutlineShoppingCart  className='cart-icon'/></Link>
    </div>
  )
}

export default Header