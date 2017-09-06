import React from 'react'
import PropTypes from 'prop-types'

import './TopBar.css'

const TopBar = ({ logo, name }) => (
  <div className="grocery-shop-top-bar">
    <div className="grocery-shop-top-bar-left">
      <div className="grocery-shop-top-bar-logo" style={{ backgroundImage: `url('${logo}')` }} />
    </div>
    <div className="grocery-shop-top-bar-title">
      <div className="grocery-shop-top-bar-title-welcome">
        Welcome
        <div className="grocery-shop-top-bar-title-name">{name}</div>
      </div>
      <div className="grocery-shop-top-bar-title-info">Your grocery list</div>
    </div>
  </div>
)

TopBar.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TopBar
