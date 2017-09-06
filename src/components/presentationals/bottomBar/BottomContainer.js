import React from 'react'
import PropTypes from 'prop-types'

import './BottomContainer.css'

const BottomContainer = ({ cart, children }) => (
  <div className="grocery-shop-bottom-bar" />
)

BottomContainer.propTypes = {
  cart: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
}

export default BottomContainer
