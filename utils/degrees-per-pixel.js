'use strict'

const tileSize = 256
const base = 2

module.exports = function (zoom, degrees) {
  let pixels = tileSize * Math.pow(base, zoom)
  return degrees / pixels
}
