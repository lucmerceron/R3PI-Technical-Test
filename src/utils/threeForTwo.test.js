import threeForTwo from './threeForTwo'

describe('threeForTwo util', () => {
  const price = 10
  const quantities = [0, 1, 2, 3, 5, 6, 9, 10, 22, 99]
  const expectedResult = [0, 10, 20, 20, 40, 40, 60, 70, 150, 660]
  it('should correctly calculate the reduction depending on a value & a price', () => {
    const reducResult = quantities.map(quantity => threeForTwo(quantity, price))
    expect(reducResult).toEqual(expectedResult)
  })
})
