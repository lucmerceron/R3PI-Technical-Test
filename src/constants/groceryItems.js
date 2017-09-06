import threeForTwoFormula from '../utils/threeForTwo'

export default [
  {
    id: 1,
    name: 'apple',
    price: 25,
    picture: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    stats: {
      calories: 52,
      fat: '0.2 g',
      potassium: '107 mg',
      carbohydrate: '13 g',
      protein: '0.3 g',
    },
  },
  {
    id: 2,
    name: 'orange',
    price: 30,
    picture: 'https://images.pexels.com/photos/65923/orange-food-juicy-fruit-65923.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    stats: {
      calories: 47,
      fat: '0.1 g',
      potassium: '181 mg',
      carbohydrate: '11 g',
      protein: '0.9 g',
    },
  },
  {
    id: 3,
    name: 'banana',
    price: 15,
    picture: 'https://images.pexels.com/photos/39566/banana-tropical-fruit-yellow-healthy-39566.jpeg'
      + '?w=1260&h=750&auto=compress&cs=tinysrgb',
    stats: {
      calories: 82,
      fat: '0.3 g',
      potassium: '358 mg',
      carbohydrate: '22 g',
      protein: '1.1 g',
    },
  },
  {
    id: 4,
    name: 'papaya',
    price: 50,
    picture: 'http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/e/ensalada-depapaya600.jpg?itok=dFmDgOY3',
    stats: {
      calories: 43,
      fat: '0.3 g',
      potassium: '182 mg',
      carbohydrate: '10 g',
      protein: '0.5 g',
    },
    reductionFormula: threeForTwoFormula,
    reductionDesc: 'Three for the price of two !',
  },
]
