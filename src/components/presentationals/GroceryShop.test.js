import React from 'react'
import { mount } from 'enzyme'

import userInfo from '../../constants/userInfo'
import groceryItems from '../../constants/groceryItems'

import GroceryShop from './GroceryShop'

describe('GroceryShop component', () => {
  const props = {
    cart: [1, 1, 1, 2, 3, 4, 4, 2, 1, 2, 4, 3],
    addItem: jest.fn(),
    removeItem: jest.fn(),
    removeItems: jest.fn(),
  }

  const GroceryShopWrapper = mount(<GroceryShop {...props} />)

  it('should render GroceryShop', () => {
    expect(GroceryShopWrapper.find('.grocery-shop').node).toBeDefined()
  })
  it('should render TopBar and give it correct properties', () => {
    expect(GroceryShopWrapper.find('TopBar').node).toBeDefined()
    expect(GroceryShopWrapper.find('TopBar').props()).toEqual({
      logo: userInfo.logo,
      name: userInfo.name,
    })
  })
  it('should render GroceryList and give it correct properties', () => {
    expect(GroceryShopWrapper.find('GroceryList').node).toBeDefined()
    expect(GroceryShopWrapper.find('GroceryList').props()).toEqual({
      items: groceryItems,
      cart: props.cart,
      addItem: props.addItem,
      removeItem: props.removeItem,
    })
  })
  it('should render BottomContainer and Receipt and give them correct properties', () => {
    expect(GroceryShopWrapper.find('BottomContainer').node).toBeDefined()
    expect(GroceryShopWrapper.find('Receipt').node).toBeDefined()
    expect(GroceryShopWrapper.find('BottomContainer').prop('cart')).toEqual(props.cart)
    expect(GroceryShopWrapper.find('Receipt').props()).toEqual({
      items: groceryItems,
      cart: props.cart,
      removeItems: props.removeItems,
    })
  })
})
