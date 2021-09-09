import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import '../styles/Banner.css'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner>
        <div>
          <div className="eko-logo-title">
            <img src={logo} alt="Eko Sport" className="eko-logo" />
            <h1 className="eko-title">Eko Sport</h1>
          </div>
          <p className="eko-description">
            L'équipement sportif éco-responsable
          </p>
        </div>
      </Banner>
      <div className="eko-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App
