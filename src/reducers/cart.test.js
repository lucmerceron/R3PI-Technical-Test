import cart from './cart'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEMS,
} from '../actionCreators/cart'

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual([])
  })

  it('should handle adding an itemId', () => {
    expect(
      cart([], {
        type: ADD_ITEM,
        itemId: 4,
      }),
    ).toEqual([4])
  })
  it('should handle adding different itemId', () => {
    expect(
      cart([4], {
        type: ADD_ITEM,
        itemId: 5,
      }),
    ).toEqual([4, 5])
  })
  it('should handle same multiple itemId', () => {
    expect(
      cart([4, 5, 4], {
        type: ADD_ITEM,
        itemId: 5,
      }),
    ).toEqual([4, 5, 4, 5])
  })

  it('should handle removing a not present itemId', () => {
    expect(
      cart([5], {
        type: REMOVE_ITEM,
        itemId: 4,
      }),
    ).toEqual([5])
  })
  it('should handle removing the first itemId', () => {
    expect(
      cart([4, 5, 4], {
        type: REMOVE_ITEM,
        itemId: 4,
      }),
    ).toEqual([5, 4])
  })
  it('should handle removing every specific itemId', () => {
    expect(
      cart([4, 5, 4, 6, 5, 4], {
        type: REMOVE_ITEMS,
        itemId: 4,
      }),
    ).toEqual([5, 6, 5])
  })
})
