import React from 'react'
import PropTypes from 'prop-types'

import './TopBar.css'

const TopBar = ({ logo, name }) => (
  <div className="grocery-shop-top-bar">
    <div className="grocery-shop-top-bar-logo" style={{ backgroundImage: `url('${logo}')` }} />
    <div className="grocery-shop-top-bar-title">
      <p className="grocery-shop-top-bar-title-welcome">Welcome</p>
      <p className="grocery-shop-top-bar-title-name">{name}</p>
      <p className="grocery-shop-top-bar-title-info">Your grocery list</p>
    </div>
  </div>
)

TopBar.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TopBar
