import React from 'react'
import PropTypes from 'prop-types'

import GroceryItem from './GroceryItem'

import './GroceryList.css'

const GroceryList = ({ items, cart, addItem, removeItem }) => (
  <div className="grocery-shop-items">
    {items.map(item => (
      <GroceryItem
        key={item.id}
        item={item}
        quantity={cart.reduce((acc, itemId) => {
          if (itemId === item.id) return acc + 1
          return acc
        }, 0)}
        addItem={addItem}
        removeItem={removeItem}
      />
    ))}
  </div>
)

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default GroceryList
