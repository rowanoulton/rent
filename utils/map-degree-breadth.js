'use strict'

const degreesPerPixel = require('./degrees-per-pixel')

module.exports = function (pixels, degrees, zoom) {
  return degreesPerPixel(zoom, degrees) * pixels
}
