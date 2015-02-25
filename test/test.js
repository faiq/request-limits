var request = require('request')
  , http = require('http')
  , crypto = require('crypto')
  , limit = require('../index')
  , Code = require('code') 
  , Lab = require('lab')
  , lab = exports.lab = Lab.script()
  , describe = lab.describe
  , it = lab.it
  , before = lab.before
  , expect = Code.expect

describe('a request thats too big', function () { 
  it ('should throw an error', function (done) {  
    http.createServer(function (req, res) {
        crypto.randomBytes(256, function(ex, buf) {
          if (ex) throw ex
          res.end(buf)
        })
      }).listen(1337, '127.0.0.1')
     
    var opts = {uri:'http://127.0.0.1:1337'}
      , s = request(opts, function (e, r, b) { 
          expect(e).to.exist()
          expect(r).to.not.exist()
          expect(b).to.not.exist()
          done()
        })
    limit(s, 255)
  })
})
