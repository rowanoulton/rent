'use strict'

const RGBPerPercent = 255 / 100

module.exports = function (percentile) {
  let red = Math.round(RGBPerPercent * percentile)
  let green = 255 - red

  return `${red},${green},0`
}
