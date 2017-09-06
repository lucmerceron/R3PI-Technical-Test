import memoize from 'mem'

const threeForTwo = (qty, price) => (qty - Math.floor(qty / 3)) * price

/* threeForTwo is not calcul-heavy but let's add memoization for the sake of it */
export default memoize(threeForTwo)
