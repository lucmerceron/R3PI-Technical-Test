import React from 'react'
import { mount } from 'enzyme'

import userInfo from '../../../constants/userInfo'
import TopBar from './TopBar'

describe('TopBar component', () => {
  const props = userInfo

  const TopBarWrapper = mount(<TopBar {...props} />)

  it('should render TopBar', () => {
    expect(TopBarWrapper.find('.grocery-shop-top-bar').node).toBeDefined()
  })
  it('should render the given name', () => {
    expect(TopBarWrapper.find('.grocery-shop-top-bar-title-name').text()).toEqual(props.name)
  })
  it('should display the given logo', () => {
    expect(TopBarWrapper.find('.grocery-shop-top-bar-logo').props().style.backgroundImage)
      .toEqual(`url('${props.logo}')`)
  })
})
