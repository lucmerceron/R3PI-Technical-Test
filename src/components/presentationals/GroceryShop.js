import React from 'react'
import PropTypes from 'prop-types'

import userInfo from '../../constants/userInfo'
import groceryItems from '../../constants/groceryItems'
import TopBar from './topBar/TopBar'
import GroceryList from './groceries/GroceryList'
import BottomContainer from './bottomBar/BottomContainer'
import Receipt from './bottomBar/Receipt'

import './GroceryShop.css'

const GroceryShop = ({ cart, addItem, removeItem, removeItems }) => (
  <div className="grocery-shop">
    <TopBar logo={userInfo.logo} name={userInfo.name} />
    <GroceryList items={groceryItems} cart={cart} addItem={addItem} removeItem={removeItem} />
    <BottomContainer cart={cart}>
      <Receipt items={groceryItems} cart={cart} removeItems={removeItems} />
    </BottomContainer>
  </div>
)

GroceryShop.propTypes = {
  cart: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  removeItems: PropTypes.func.isRequired,
}

export default GroceryShop
