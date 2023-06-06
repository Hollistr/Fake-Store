import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'


function App() {

  return (
    <BrowserRouter className="app-container">
      <Header />
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
