module.exports = function (stream, bytes) { 
  var length = 0
  stream.on('data', function (chunk) {
    length += chunk.length
    if (length > bytes) {
      stream.emit('error', new Error('the response is too long'))
      return
    }
  })
}
