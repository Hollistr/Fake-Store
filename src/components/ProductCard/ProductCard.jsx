import React, {useContext, useState, useEffect} from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'

function ProductCard({product}) {
  // change to use global state
  // NOTE { } not [ ]
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  // create variable to control heart icons
  // const cartItem = false;
  // change to state
  const [cartItem, setCartItem] = React.useState(false)

  // need to check if this product is in cart anytime cart changes
  React.useEffect (
    () => {
      // console.log('cart changed')
      // is this product in cart?
      setCartItem(cart.find(item => item.id == product.id))

    }, [cart]
  )

  return (
    <div className='product-card'>
        <img src={product?.image} />
        <h2>{product?.title}</h2>
        <p>{product?.category}</p>
        <h2>Price:{product?.price}</h2>
        <Link to={`/details/${product?.id}`}>See Details</Link>
        {
          cartItem?
          <FaHeart className='heart-icon'onClick={() => removeProduct(product?.id)}/>
          :
          <FaRegHeart className='heart-icon' onClick={() => addProduct(product)}/>
        }
    </div>
  )
}

export default ProductCard