/*global describe,it,expect*/

'use strict'

const mapEdge = require('../../utils/map-edge')

describe('MapEdge', function () {
  it('should calculate the top left corner of a 1280x1280 map centered in Auckland, with zoom 11', function () {
    let result = mapEdge(1280, 1280, -36.848461, 174.763336, 11)
    expect(result.long).toEqual(174.323882875)
    console.log(result)
  })
})
