const path = require('path')
const fs = require('fs')

// 返回到主路径下到全路径地址
const joinPath = (pathname) => {
  return path.join(__dirname, '../', pathname)
}

const formatRoutes = function (routesStr) {
  routesStr = routesStr.replace(/(component:\s?)([^,\s]+)(}|,)/ig, (match) => {
    let hasDot = match.indexOf('}') !== -1
    match = match.replace(/[\s},]/ig, '')
    let [_com, _path] = match.split(':')
    _path = _path.replace(/\.\//g, joinPath('src/'))
    return `${_com}: require(${_path}).default${hasDot ? '}' : ','}`
  })
  return routesStr
}

module.exports = {
  joinPath, formatRoutes
}
