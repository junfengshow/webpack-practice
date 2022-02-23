/**
 * 这是一个同步loader
 */
module.exports = function (context, map, meta) {

  console.log('同步loader：sync-loader');
  this.callback(null, context, map, meta);
  // 或者
  // return context;
}
