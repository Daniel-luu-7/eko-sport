import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }

  return (
    <footer className="eko-footer">
      <div className="eko-footer-elem">
        Pour les passionné·e·s de sport et d'éco-responsabilité 🌿🌱
      </div>
      <div className="eko-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  )
}

export default Footer
