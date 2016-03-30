'use strict'

const degreeBreadth = require('./map-degree-breadth')
const degrees = 360

module.exports = function (width, height, centerLat, centerLong, zoom) {
  let latitudeBelowEquator = centerLat < 0
  let breadth = degreeBreadth(height, degrees, zoom)
  let leftEdge = centerLong - (breadth / 2)

  let degreesPerPixel = 360 * Math.cos(centerLat) / Math.pow(2, (zoom + 8))
  let newBreadth = width * degreesPerPixel
  let topEdge = latitudeBelowEquator ? centerLat + (newBreadth / 2) : centerLat - (newBreadth / 2)

  return {
    lat: topEdge,
    long: leftEdge
  }
}
