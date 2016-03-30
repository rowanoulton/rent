/*global describe,it,expect*/

'use strict'

const degreesPerPixel = require('../../utils/degrees-per-pixel')

describe('DegreesPerPixel', function () {
  describe('for longitude', function () {
    it('should calculate the correct density of degrees-per-pixel for a zoom level of 0', function () {
      expect(degreesPerPixel(0, 360)).toEqual(360 / 256)
      expect(degreesPerPixel(0, 180)).toEqual(180 / 256)
    })

    it('should calculate the correct density of degrees-per-pixel for a zoom level of 1', function () {
      expect(degreesPerPixel(1, 360)).toEqual(360 / 512)
      expect(degreesPerPixel(1, 180)).toEqual(180 / 512)
    })

    it('should calculate the correct density of degrees-per-pixel for a zoom level of 2', function () {
      expect(degreesPerPixel(2, 360)).toEqual(360 / 1024)
      expect(degreesPerPixel(2, 180)).toEqual(180 / 1024)
    })

    it('should calculate the correct density of degrees-per-pixel for a zoom level of 5', function () {
      expect(degreesPerPixel(5, 360)).toEqual(360 / 8192)
      expect(degreesPerPixel(5, 180)).toEqual(180 / 8192)
    })

    it('should calculate the correct density of degrees-per-pixel for a zoom level of 11', function () {
      expect(degreesPerPixel(11, 360)).toEqual(360 / 524288)
      expect(degreesPerPixel(11, 180)).toEqual(180 / 524288)
    })
  })
})
