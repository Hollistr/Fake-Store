import React, { useEffect, useState, useContext } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'
import Catagory from '../Catagory/Catagory'
import { ThemeContext } from '../../Context/ThemeContext'

function Homepage() {
    // change to use global state
    // NOTE { } not [ ]
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    // Create state for products
    const [products, setProducts] = useState( [] )
    

    // https://fakestoreapi.com/products
    
    // I need to make api call when the page loads so I need useEffect
    useEffect(
      () => {
            console.log('homepage loaded')
            //call API to get products
            axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                console.log(res.data)
                //store this data in state
                setProducts(res.data) 
            }
            )
            .catch(err => console.log(err))
      }, [] //empty array means run one time when page loads

    )

  return (
    <div className={darkMode?'home-container home-dark':'home-container'}>
      <div className='catagory-container'>
        <Catagory setProducts={setProducts}/>
      </div>
      <div className='products-container'>
          {
            products.map(item => <ProductCard 
                                key={item.id}
                                product={item} />)
            // products.map(item => <p key={item.id}>{item.title}</p>)
          }
      </div>
    </div>
  )
}

export default Homepage