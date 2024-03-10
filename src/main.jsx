import React from 'react'
import ReactDOM from 'react-dom/client'
import '../public/style.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Cart from './components/Cart.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Products from './pages/Products.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)
