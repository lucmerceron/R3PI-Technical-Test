import React from 'react'
import PropTypes from 'prop-types'

import './GroceryItem.css'

const GroceryItem = ({ item, quantity, addItem, removeItem }) => (
  <div className="grocery-shop-item">
    <div className="grocery-shop-item-left">
      <div className="grocery-shop-item-picture" style={{ backgroundImage: `url('${item.picture}')` }} />
      <div className="grocery-shop-item-left-bottom">
        <div className="grocery-shop-item-price">
          {item.price}
          <div className="grocery-shop-item-cts">CTS</div>
        </div>
        <div className="grocery-shop-item-actions">
          <div className="grocery-shop-item-remove material-icons" onClick={removeItem}>
            &#xE15B;
          </div>
          <div className="grocery-shop-item-add material-icons" onClick={addItem}>
            &#xE145;
          </div>
        </div>
      </div>
    </div>
    <div className="grocery-shop-item-right">
      <div className="grocery-shop-item-name">{item.name}</div>
      <div className="grocery-shop-item-stats-weight">for 100g</div>
      <div className="grocery-shop-item-stats">
        {Object.keys(item.stats).map(key => (
          <div key={key} className="grocery-shop-item-stat">
            <span className="grocery-shop-item-stat-desc">{key}</span>
            <span className="grocery-shop-item-stat-val">{item.stats[key]}</span>
          </div>
        ))}
      </div>
    </div>
    {item.reductionDesc && <div className="grocery-shop-item-reduction">{item.reductionDesc}</div>}
    <div className="grocery-shop-item-quantity"><span>{quantity}</span></div>
  </div>
)

GroceryItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default GroceryItem
