var request = require('request')
  , http = require('http')
  , crypto = require('crypto')
  , limit = require('./index')

http.createServer(function (req, res) {
  crypto.randomBytes(256, function(ex, buf) {
    if (ex) throw ex
    res.end(buf)
  })
}).listen(1337, '127.0.0.1')

var opts = {uri:'http://127.0.0.1:1337'}
  , s = request(opts, function (e, r, b) { 
      if (e) console.error(e)
    });

limit(s, 255) 
