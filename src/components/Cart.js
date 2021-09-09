import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const items = Object.keys(cart)
  const total = items.reduce(
    (acc, item) => acc + cart[item].amount * cart[item].price,
    0
  )

  useEffect(() => {
    document.title = `Eko Sport: ${total}€ d'achats`
  }, [total])

  return isOpen ? (
    <div className="eko-cart">
      <button
        className="eko-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total: {total}€</h3>
          <button id="eko-btn-empty-cart" onClick={() => updateCart([])}>
            Vider le panier
          </button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="eko-cart-closed">
      <button
        className="eko-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  )
}

export default Cart
