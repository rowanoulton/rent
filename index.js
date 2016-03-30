'use strict'

const regions = require('./config/regions')
const fetchRegion = require('./utils/fetch-region')

regions.forEach(region => {
  console.log(`Fetching ${region.name}`)
  fetchRegion(region, (err, results) => {
    if (err) throw err
    console.log(`Fetched ${results.length} results for ${region.name}`)
  })
})

