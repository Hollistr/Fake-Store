import React, { useEffect, useState } from 'react'
import "./Catagory.css"
import axios from 'axios'

// Need to display all catagories
// Need to make api call to retrieve catagories
// When do I make api call... when component loads so need use effect

// https://fakestoreapi.com/products/categories
//https://fakestoreapi.com/products/category/jewelery


function Catagory({setProducts}) {
  // create state to hold catagorise
  const [categories, setCategories] = useState ([])
  

  const searchCategory = (category) => {
    //change the catagory to the parameter
    console.log(category)
    //make api call to retrieve specific category data
    axios.get(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => {
        console.log(res)
        setCategories(res.jewelery)
    })
    .catch(err => console.log(err))



  }

  const allCategory = (category) => {
    console.log(category)
    //make api call to retrieve all category data
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
        console.log(res.data)
        setProducts(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(
    () => {
          //call API to get products
          axios.get(`https://fakestoreapi.com/products/categories`)
          .then(res => {
              console.log(res.data)
              //store this data in state 
              setCategories(res.data)
          }
          )
          .catch(err => console.log(err))
    }, [] //empty array means run one time when page loads
  
  )

  return (
    <div className='category-container'>
      <p onClick={(item) => allCategory(item)}>All</p>
      {
        categories.map (item => <p key={item} onClick={() => searchCategory(item)}>{item}</p>)
      }
    </div>
  )
}

export default Catagory