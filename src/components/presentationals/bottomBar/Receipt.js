import React from 'react'
import PropTypes from 'prop-types'

import transformTotal from '../../../utils/transformTotal'

import './Receipt.css'

const Receipt = ({ items, cart, removeItems }) => {
  const uniqItemId = [...new Set(cart)]
  let totalPrice = 0

  return (
    <ul className="grocery-shop-receipt">
      {uniqItemId.map(itemId => {
        const itemIndex = items.findIndex(val => val.id === itemId)
        if (itemIndex === -1) return null
        const item = items[itemIndex]
        const itemQty = cart.reduce((acc, id) => {
          if (id === itemId) return acc + 1
          return acc
        }, 0)
        const itemTotal = item.reductionFormula ? item.reductionFormula(itemQty, item.price) : itemQty * item.price
        totalPrice += itemTotal

        return (
          <li key={itemId} className="grocery-shop-receipt-item">
            <div
              className="grocery-shop-receipt-item-remove material-icons"
              onClick={() => removeItems(itemId)}
            >&#xE92B;</div>
            <div className="grocery-shop-receipt-item-name">{item.name}</div>
            <div className="grocery-shop-receipt-item-price">{item.price}</div>
            <div className="grocery-shop-receipt-item-quantity">x {itemQty}</div>
            <div className="grocery-shop-receipt-item-total">{transformTotal(itemTotal)}</div>
          </li>
        )
      })}
      <div className="grocery-shop-receipt-total-price">
        total : <span>{transformTotal(totalPrice)}</span>
      </div>
    </ul>
  )
}

Receipt.propTypes = {
  items: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  removeItems: PropTypes.func.isRequired,
}

export default Receipt
