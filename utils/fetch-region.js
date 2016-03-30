'use strict'

const jsonist = require('jsonist')
const async = require('async')
const querystring = require('query-string')
const opts = require('../config/opts')
const keys = require('../config/response-keys')
const endpoint = require('../config/endpoint')
const fetchPageCount = require('./fetch-page-count')
const maxRows = 500

module.exports = function (region, callback) {
  // First, check how many pages we need to load
  fetchPageCount(region.id, maxRows, (err, totalPages) => {
    if (err) callback(err)
    let requests = []

    // Next, create a function to load each page
    for (let i = 1; i <= totalPages; i++) {
      requests.push((function (pageNum, regionId) {
        return function (cb) {
          let query = querystring.stringify({
            region: regionId,
            page: pageNum,
            rows: maxRows
          })

          jsonist.get(`${endpoint}?${query}`, opts, (err, data) => {
            cb(err, data)
          })
        }
      })(i, region.id))
    }

    // ... then fetch them all in parallel.
    async.parallel(requests, function (err, pages) {
      if (err) callback(err)
      let results = []

      // Finally, we want to concatenate the results from _all_ pages
      pages.forEach(page => {
        results = results.concat(page[keys.list])
      })

      // ... and hand them back to our caller
      callback(err, results)
    })
  })
}
