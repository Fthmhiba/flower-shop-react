import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Catalog from './Catalog'
import Delivery from './Delivery'
import Footer from './Footer'

function App() {

  return (
    <>
  <Home/>
  <Catalog/>
  <Delivery/>
  <Footer/>
    </>
  )
}

export default App
