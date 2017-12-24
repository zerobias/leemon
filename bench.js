//@flow

const { Suite } = require('benchmark')

const {
  bigInt2str,
  str2bigInt,
} = require('./lib')

function fourDigitRandom() {
  return (Math.random() * 9e3 + 1e3) | 0
}

function eightDigitHex() {
  return fourDigitRandom().toString(16) + fourDigitRandom().toString(16)
}

const fullBench = new Suite('full bench')
  .add('bigInt2str', () => bigInt2str([
    fourDigitRandom(),
    fourDigitRandom(),
    fourDigitRandom(),
    0, 0, 0
  ], 16))
  .add('str2bigInt', () => str2bigInt(eightDigitHex(), 16))
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  // .on('complete', function() {
  //   console.log('Fastest is ' + this.filter('fastest').map('name'))
  //   // console.log(this[0].stats)
  // })

fullBench.run()
fullBench.run()
fullBench.run()
fullBench.run()
