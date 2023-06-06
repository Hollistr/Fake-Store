import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

//AiOutlineShoppingCart

function Header() {
  return (
    <div className="header-container">
        <a href='/'>Fake Store</a>
        <AiOutlineShoppingCart  className='cart-icon'/>
    </div>
  )
}

export default Header