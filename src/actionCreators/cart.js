import makeActionCreator from './makeActionCreator'

/* Action types */
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REMOVE_ITEMS = 'REMOVE_ITEMS'

/* Action creators */
export const addItem = makeActionCreator(ADD_ITEM, 'itemId')
export const removeItem = makeActionCreator(REMOVE_ITEM, 'itemId')
export const removeItems = makeActionCreator(REMOVE_ITEMS, 'itemId')

/* Thunk action creators */
/* The application having no API to call, we do not have asynchronous thunk actions */
