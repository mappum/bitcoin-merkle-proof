var reverse = require('buffer-reverse')

/**
 * @param {string} s
 * @return {Buffer}
 */
module.exports.string2buffer = function (s) {
  return reverse(new Buffer(s, 'hex'))
}

/**
 * @param {Buffer} b
 * @return {string}
 */
module.exports.buffer2string = function (b) {
  return reverse(new Buffer(b)).toString('hex')
}

/**
 * @param {string[]} ss
 * @param {Buffer[]}
 */
module.exports.strings2buffers = function (ss) {
  return ss.map(function (s) { return module.exports.string2buffer(s) })
}

/**
 * @param {Buffer[]} bs
 * @param {string[]}
 */
module.exports.buffers2string = function (bs) {
  return bs.map(function (b) { return module.exports.buffer2string(b) })
}
