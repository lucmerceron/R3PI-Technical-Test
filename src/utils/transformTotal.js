import memoize from 'memoizee'

const transformTotal = total => Number(total / 100).toLocaleString('es-ES', { minimumFractionDigits: 2 })

export default memoize(transformTotal)
