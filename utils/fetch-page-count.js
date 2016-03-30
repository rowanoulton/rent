'use strict'

const jsonist = require('jsonist')
const querystring = require('query-string')
const opts = require('../config/opts')
const keys = require('../config/response-keys')
const pageCount = require('./page-count')
const endpoint = require('../config/endpoint')

module.exports = function (regionId, maxRows, callback) {
  let query = querystring.stringify({
    region: regionId,
    rows: 1
  })

  jsonist.get(`${endpoint}?${query}`, opts, (err, data) => {
    callback(err, pageCount(maxRows, data[keys.total]))
  })
}

