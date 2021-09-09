import '../styles/ClothingItem.css'
import Label from './Label'

function handleClick(clothingName) {
  alert(`Vous voulez acheter 1 ${clothingName}? Très bon choix 🌱✨`)
}

function ClothingItem({ cover, name, price, labels }) {
  return (
    <li className="eko-clothing-item" onClick={() => handleClick}>
      <span className="eko-clothing-item-price">{price}€</span>
      <img
        className="eko-clothing-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      <div className="eko-clothing-item-name">{name}</div>
      <Label labels={labels} />
    </li>
  )
}

export default ClothingItem
