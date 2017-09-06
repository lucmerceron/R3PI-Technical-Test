import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import GroceryShop from './components/containers/GroceryShop'

const App = ({ store }) => (
  <Provider store={store}>
    <GroceryShop />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App

