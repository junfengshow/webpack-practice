module.exports = function (source) {
  let _source = source
  console.log('this is pitch-loader-1')
  return _source
}
module.exports.pitch = function (source, precedingRequest, data) {
  console.log('this is pitch-loader-1 pitching')
}
