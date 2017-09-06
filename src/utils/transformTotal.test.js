import transformTotal from './transformTotal'

describe('transformTotal util', () => {
  const totals = [50, 100, 111, 750, 1110, 8789]
  const expectedResult = ['0.50', '1.00', '1.11', '7.50', '11.10', '87.89']
  it('should correctly transform a total', () => {
    const transformResult = totals.map(total => transformTotal(total).toString())
    expect(transformResult).toEqual(expectedResult)
  })
})
