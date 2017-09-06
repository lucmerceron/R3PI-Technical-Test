import React from 'react'
import { mount } from 'enzyme'

import BottomContainer from './BottomContainer'

describe('BottomContainer component', () => {
  const props = {
    cart: [1, 3, 4, 1, 4, 3, 1, 1],
    children: <div className="present">test</div>,
  }
  const propsEmpty = {
    cart: [],
    children: <div>test</div>,
  }

  const BottomContainerWrapper = mount(<BottomContainer {...props} />)
  const BottomContainerEmptyWrapper = mount(<BottomContainer {...propsEmpty} />)

  it('should render BottomContainer if cart is not empty', () => {
    expect(BottomContainerWrapper.find('.grocery-shop-bottom-bar').node).toBeDefined()
    expect(BottomContainerEmptyWrapper.find('.grocery-shop-bottom-bar').node).toBeUndefined()
  })
  it('should display the number of item in the cart', () => {
    expect(BottomContainerWrapper.find('.grocery-shop-bottom-bar-item-count').text())
      .toEqual(props.cart.length.toString())
  })
  it('should change state to visible when clicked', () => {
    expect(BottomContainerWrapper.state('visible')).toBeFalsy()
    BottomContainerWrapper.find('.grocery-shop-bottom-bar').simulate('click')
    expect(BottomContainerWrapper.state('visible')).toBeTruthy()
  })
  it('should change state to hidden if closed', () => {
    expect(BottomContainerWrapper.state('visible')).toBeTruthy()
    BottomContainerWrapper.find('.grocery-shop-bottom-bar-close').simulate('click')
    expect(BottomContainerWrapper.state('visible')).toBeFalsy()
  })
  it('should display its children', () => {
    expect(BottomContainerWrapper.find('.present').node).toBeDefined()
  })
})
