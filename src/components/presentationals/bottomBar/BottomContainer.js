import React from 'react'
import PropTypes from 'prop-types'

import './BottomContainer.css'

class BottomContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      visible: false,
    }
  }

  render() {
    const { cart, children } = this.props
    const { visible } = this.state

    if (cart.length === 0) return null

    return (
      <div
        className={`grocery-shop-bottom-bar${visible ? ' visible' : ''}`}
        onClick={() => this.setState({ visible: true })}
      >
        <div className="grocery-shop-bottom-bar-item-count">{cart.length}</div>
        <div
          className="grocery-shop-bottom-bar-close"
          onClick={(event) => {
            event.stopPropagation()
            this.setState({ visible: false })
          }}
        />
        <div className="grocery-shop-bottom-bar-children">
          {children}
        </div>
      </div>

    )
  }
}

BottomContainer.propTypes = {
  cart: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
}

export default BottomContainer
