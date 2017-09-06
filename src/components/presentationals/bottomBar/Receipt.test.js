import React from 'react'
import { mount } from 'enzyme'

import groceryItems from '../../../constants/groceryItems'
import Receipt from './Receipt'

describe('Receipt component', () => {
  const props = {
    items: groceryItems,
    cart: [1, 3, 4, 1, 4, 3, 1, 1],
    removeItems: jest.fn(),
  }

  const ReceiptWrapper = mount(<Receipt {...props} />)

  it('should render Receipt', () => {
    expect(ReceiptWrapper.find('.grocery-shop-receipt').node).toBeDefined()
  })
  it('should render N unique item added', () => {
    const uniqItemId = new Set(props.cart)
    expect(ReceiptWrapper.find('.grocery-shop-receipt-item').length).toEqual(uniqItemId.size)
  })
  it('should display the correct item information & use callback with itemId', () => {
    let totalPrice = 0
    ReceiptWrapper.find('.grocery-shop-receipt-item').forEach(domItem => {
      const id = parseInt(domItem.key(), 10)
      const itemIndex = props.items.findIndex(val => val.id === id)
      expect(itemIndex).toBeGreaterThan(-1)
      const item = props.items[itemIndex]
      const itemQty = props.cart.reduce((acc, itemId) => {
        if (itemId === id) return acc + 1
        return acc
      }, 0)
      const itemTotal = item.reductionFormula ? item.reductionFormula(itemQty, item.price) : itemQty * item.price
      totalPrice += itemTotal
      expect(domItem.find('.grocery-shop-receipt-item-name').text()).toEqual(item.name)
      expect(domItem.find('.grocery-shop-receipt-item-price').text()).toEqual(item.price.toString())
      expect(domItem.find('.grocery-shop-receipt-item-quantity').text()).toEqual(itemQty.toString())
      expect(domItem.find('.grocery-shop-receipt-item-total').text()).toEqual(itemTotal.toString())
      domItem.find('.grocery-shop-receipt-item-remove').simulate('click')
      expect(props.removeItems).toBeCalled()
    })
    expect(ReceiptWrapper.find('.grocery-shop-receipt-total').text()).toEqual(totalPrice.toString())
  })
})
