import { connect } from 'react-redux'

import { addItem, removeItem, removeItems } from '../../actionCreators/cart'
import GroceryShop from '../presentationals/GroceryShop'

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  addItem: itemId => dispatch(addItem(itemId)),
  removeItem: itemId => dispatch(removeItem(itemId)),
  removeItems: itemId => dispatch(removeItems(itemId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroceryShop)
