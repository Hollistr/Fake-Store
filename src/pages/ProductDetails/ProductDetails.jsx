import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'
import { ThemeContext } from '../../Context/ThemeContext'

function ProductDetails() {
    // change to use global state
    // NOTE { } not [ ]
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    // This page shows the details for a specific product
    // How do I know which one?
    // the id is in the url
    const {productId} = useParams()

    // create state to hold character data
    const [product, setProduct] = React.useState('')

    // https://fakestoreapi.com/products/1
    // get the data when page loads
    React.useEffect(
      () => {
          // console.log('loaded')
          // make api call to get product data
          axios.get(`https://fakestoreapi.com/products/${productId}`)
          .then(res => {
              console.log(res.data)
              // what do I do with this data?
              setProduct(res.data)
          })
          .catch(err => console.log(err))

      }, [] //runs when page loads
    )

  return (
    <div className={darkMode?'product-container product-container-dark':'product-container'}>
      <img src={product.image} />
      <div className='container-info'>
        <h2>{product.title}</h2>
        <h2>Price: {product.price}</h2>
        <h3>Description</h3>
        <p>{product.description}</p>
        <a href='/checkout'>Add to Cart</a>
      </div>
    </div>
  )
}

export default ProductDetails