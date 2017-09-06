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

  componentWillReceiveProps(nextProps) {
    const { cart } = this.props

    // The children should not be visible if the cart became empty
    if (nextProps.cart.length === 0 && cart.length > 0) {
      this.setState({ visible: false })
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
        <div className="grocery-shop-bottom-bar-visible-off">
          <div className="grocery-shop-bottom-bar-item-count"><span>{cart.length}</span></div>
          <div className="grocery-shop-bottom-bar-info">Open your cart</div>
        </div>
        <div className="grocery-shop-bottom-bar-visible-on">
          <div className="grocery-shop-bottom-bar-top">
            <span>grocery basket</span>
            <div
              className="grocery-shop-bottom-bar-close material-icons"
              onClick={(event) => {
                event.stopPropagation()
                this.setState({ visible: false })
              }}
            >
              &#xE5CD;
            </div>
          </div>
          <div className="grocery-shop-bottom-bar-children">
            {children}
          </div>
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
