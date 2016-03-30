/*global describe,it,expect*/

'use strict'

const percentileColour = require('../../utils/percentile-to-colour')

describe('PercentileToColour', function () {
  it('should convert 100% to red', function () {
    expect(percentileColour(100)).toEqual('255,0,0')
  })

  it('should convert 0% to green', function () {
    expect(percentileColour(0)).toEqual('0,255,0')
  })

  it('should convert 50% to red-green', function () {
    expect(percentileColour(50)).toEqual('127,128,0')
  })
})
