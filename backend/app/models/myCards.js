'use strict';

const cars = [
  {
    type: 'VR ALIMENTAÇÃO',
    balance: 250.00,
    nextBenefit: '10/10/2018',
    lastBenefit: 1.000,
    percent: 2250
  },
  {
    type: 'VR REFEIÇÃO',
    balance: 250.00,
    nextBenefit: '10/10/2018',
    lastBenefit: 500,
    percent: 2250
  },
  {
    type: 'VR AUTO',
    balance: 250.00,
    nextBenefit: '10/10/2018',
    lastBenefit: 200,
    percent: 2250
  }
];

module.exports = () => {
  return cars;
};
