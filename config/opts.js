'use strict'

var auth = require('./auth')

module.exports = {
  headers: {
    'Authorization': `OAuth oauth_consumer_key="${auth.key}", oauth_signature_method="PLAINTEXT", oauth_signature="${auth.secret}&"`
  }
}
