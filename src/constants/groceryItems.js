import threeForTwoFormula from '../utils/threeForTwo'

export default [
  {
    id: 1,
    name: 'apple',
    price: 25,
    stats: {
      calories: 52,
      lipids: 0.2,
      potassium: 107,
      glucides: 14,
      proteins: 0.3,
    },
  },
  {
    id: 2,
    name: 'orange',
    price: 30,
    stats: {
      calories: 47,
      lipids: 0.1,
      potassium: 181,
      glucides: 12,
      proteins: 0.9,
    },
  },
  {
    id: 3,
    name: 'banana',
    price: 15,
    stats: {
      calories: 82,
      lipids: 0.3,
      potassium: 358,
      glucides: 23,
      proteins: 1.1,
    },
  },
  {
    id: 4,
    name: 'papaya',
    price: 50,
    stats: {
      calories: 43,
      lipids: 0.3,
      potassium: 182,
      glucides: 11,
      proteins: 0.5,
    },
    reductionFormula: threeForTwoFormula,
    reductionDesc: 'three for the price of two',
  },
]
