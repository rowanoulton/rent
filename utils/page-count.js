'use strict'

module.exports = function (pageSize, total) {
  return Math.ceil(total / pageSize)
}
