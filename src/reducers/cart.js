import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEMS,
} from '../actionCreators/cart'

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.itemId]
    case REMOVE_ITEM: {
      const firstItemIndex = state.indexOf(action.itemId)

      if (firstItemIndex >= 0) {
        const stateCopy = [...state]
        stateCopy.splice(firstItemIndex, 1)
        return stateCopy
      }

      return state
    }
    case REMOVE_ITEMS:
      return [...state.filter(value => value !== action.itemId)]
    default:
      return state
  }
}
