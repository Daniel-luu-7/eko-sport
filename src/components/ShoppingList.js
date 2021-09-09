import { useState } from 'react'
import { clothingList } from '../datas/clothingList'
import ClothingItem from './ClothingItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = clothingList.reduce(
    (acc, clothing) =>
      acc.includes(clothing.category) ? acc : acc.concat(clothing.category),
    []
  )

  function addToCart(name, price) {
    const currentClothingAdded = cart.find((clothing) => clothing.name === name)
    if (currentClothingAdded) {
      const cartFilteredCurrentClothing = cart.filter(
        (clothing) => clothing.name !== name
      )
      updateCart([
        ...cartFilteredCurrentClothing,
        { name, price, amount: currentClothingAdded.amount + 1 },
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div className="eko-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="eko-clothing-list">
        {clothingList.map(({ id, cover, name, price, category, labels }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <ClothingItem
                cover={cover}
                name={name}
                price={price}
                labels={labels}
              />
              <button id="btnAdd" onClick={() => addToCart(name, price)}>
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
