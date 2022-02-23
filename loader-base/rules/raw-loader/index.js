/**
 * 
 * 自定义 loader
 * 将raw设置为true可以加载资源
 */
module.exports = function (source) {
  const _this = this;
  const array = _this.resourcePath.split('/');
  const fileName = array.pop(); // '0001.jpg';
  const options = _this.query || {};
  const { limit } = options;
  const sourceLen = source.length;
  // source.length 字节数
  if (limit && limit > sourceLen) {
    source = source.toString('base64');
    return `module.exports = ${JSON.stringify(
      `data:image/jpg;base64,${source}`
    )}`
  }
  _this.emitFile(fileName, source)

  return `module.exports = ${JSON.stringify(
    `${fileName}`
  )}`
}
module.exports.raw = true;
