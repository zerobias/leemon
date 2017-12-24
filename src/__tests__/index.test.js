//@flow

import { str2bigInt } from '..'

describe('str2bigInt', () => {
  test('should process uppercase hexes with numeral base', () => {
    expect(str2bigInt('C', 16)).toEqual([12, 0])
    expect(str2bigInt('C', 16, 5)).toEqual([12, 0, 0, 0, 0])
  })
  test('should process lowercase hexes with numeral base', () => {
    expect(str2bigInt('c', 16)).toEqual([12, 0])
    expect(str2bigInt('c', 16, 5)).toEqual([12, 0, 0, 0, 0])
  })
})
