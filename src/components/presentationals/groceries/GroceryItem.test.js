import React from 'react'
import { mount } from 'enzyme'

import groceryItems from '../../../constants/groceryItems'
import GroceryItem from './GroceryItem'

describe('GroceryItem component', () => {
  const props = {
    item: groceryItems[0],
    quantity: 4,
    addItem: jest.fn(),
    removeItem: jest.fn(),
  }

  const GroceryItemWrapper = mount(<GroceryItem {...props} />)

  it('should render GroceryItem', () => {
    expect(GroceryItemWrapper.find('.grocery-shop-item').node).toBeDefined()
  })
  it('should render the item picture', () => {
    expect(GroceryItemWrapper.find('.grocery-shop-item-picture').props().style.backgroundImage)
      .toEqual(`url('${props.item.picture}')`)
  })
  it('should display the item name', () => {
    expect(GroceryItemWrapper.find('.grocery-shop-item-name').text().toLowerCase()).toEqual(props.item.name)
  })
  it('should display the item price', () => {
    expect(GroceryItemWrapper.find('.grocery-shop-item-price').text()).toContain(props.item.price)
  })
  it('should display the item quantity', () => {
    expect(GroceryItemWrapper.find('.grocery-shop-item-quantity').text()).toEqual(props.quantity.toString())
  })
  it('should display every statistics', () => {
    Object.keys(props.item.stats).forEach(stat => {
      expect(GroceryItemWrapper.find('.grocery-shop-item-stats').html()).toContain(stat)
      expect(GroceryItemWrapper.find('.grocery-shop-item-stats').html()).toContain(props.item.stats[stat])
    })
  })
  it('should trigger add item callback on click', () => {
    GroceryItemWrapper.find('.grocery-shop-item-add').simulate('click')
    GroceryItemWrapper.find('.grocery-shop-item-add').simulate('click')
    expect(props.addItem).toHaveBeenCalledTimes(2)
  })
  it('should trigger remove item callback on click', () => {
    GroceryItemWrapper.find('.grocery-shop-item-remove').simulate('click')
    expect(props.removeItem).toHaveBeenCalledTimes(1)
  })
})
