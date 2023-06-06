import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product?.image} />
        <h2>{product?.title}</h2>
        <p>{product?.category}</p>
        <h2>Price:{product?.price}</h2>
        <a href={`/details/${product?.id}`}>See Details</a>
    </div>
  )
}

export default ProductCard