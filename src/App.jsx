import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="app-container">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
