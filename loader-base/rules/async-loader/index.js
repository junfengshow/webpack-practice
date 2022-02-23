/**
 * 这是一个异步loader
 */
module.exports = function (source) {
  const callback = this.async();

  setTimeout(() => {
    console.log('this is async -loader')
    callback(null, source);
  }, 2000);
}
