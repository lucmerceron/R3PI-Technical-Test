import threeForTwoFormula from '../utils/threeForTwo'

export default [
  {
    id: 1,
    name: 'apple',
    price: 25,
    picture: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
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
    picture: `https://images.pexels.com/photos/39566/banana-tropical-
    fruit-yellow-healthy-39566.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb`,
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
    picture: 'https://images.pexels.com/photos/65923/orange-food-juicy-fruit-65923.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
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
    picture: 'http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/e/ensalada-depapaya600.jpg?itok=dFmDgOY3',
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
