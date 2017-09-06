import React from 'react'
import { mount } from 'enzyme'

import groceryItems from '../../../constants/groceryItems'
import GroceryList from './GroceryList'

describe('GroceryList component', () => {
  const props = {
    items: groceryItems,
    cart: [1, 1, 1, 2, 3, 4, 4, 2, 1, 2, 4, 3],
    addItem: jest.fn(),
    removeItem: jest.fn(),
  }

  const GroceryListWrapper = mount(<GroceryList {...props} />)

  it('should render GroceryList', () => {
    expect(GroceryListWrapper.find('.grocery-shop-items').node).toBeDefined()
  })
  it('should render as much GroceryItem as items length', () => {
    expect(GroceryListWrapper.find('GroceryItem').length).toEqual(props.items.length)
  })
  it('should give each GroceryItem its id as key', () => {
    GroceryListWrapper.find('GroceryItem').forEach(GroceryItem => {
      expect(GroceryItem.key()).toEqual(GroceryItem.prop('item').id.toString())
    })
  })
  it('should give each GroceryItem its correct quantity depending on cart', () => {
    GroceryListWrapper.find('GroceryItem').forEach(GroceryItem => {
      expect(GroceryItem.prop('quantity')).toEqual(props.cart.reduce((acc, itemId) => {
        if (itemId.toString() === GroceryItem.key()) return acc + 1
        return acc
      }, 0))
    })
  })
  it('should give down add and remove item functions', () => {
    GroceryListWrapper.find('GroceryItem').forEach(GroceryItem => {
      expect(GroceryItem.prop('addItem')).toBeDefined()
      expect(GroceryItem.prop('removeItem')).toBeDefined()
    })
  })
  it('should call the callbacks function with correct id', () => {
    GroceryListWrapper.find('GroceryItem').forEach(GroceryItem => {
      GroceryItem.prop('addItem')()
      GroceryItem.prop('removeItem')()
      expect(props.addItem).toBeCalledWith(parseInt(GroceryItem.key(), 10))
      expect(props.addItem).toBeCalledWith(parseInt(GroceryItem.key(), 10))
    })
  })
})
