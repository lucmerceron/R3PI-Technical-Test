import React from 'react'
import PropTypes from 'prop-types'

import './GroceryItem.css'

const GroceryItem = ({ item, quantity, addItem, removeItem }) => (
  <div className="grocery-shop-item" />
)

GroceryItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default GroceryItem
