/*global describe,it,expect*/

'use strict'

const degreeBreadth = require('../../utils/map-degree-breadth')

describe('MapDegreeBreadth', function () {
  it('should calculate the degree breadth of an image', function () {
    let zoom = 0
    let divisor = Math.pow(2, zoom)

    while (zoom < 12) {
      expect(degreeBreadth(256, 360, zoom)).toEqual(360 / divisor)
      expect(degreeBreadth(256, 180, zoom)).toEqual(180 / divisor)

      zoom++
      divisor = Math.pow(2, zoom)
    }
  })
})
