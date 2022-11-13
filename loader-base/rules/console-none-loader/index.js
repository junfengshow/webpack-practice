
const path = require('path');
const fs = require('fs');

// 异步获取文件
const getFile = function (url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    })
  })
}
// 异步加载模块
const getModule = (name, _this) => {
  return new Promise((resolve, reject) => {
    let errMsg = ''
    if (!name) {
      errMsg = '请传入需要加载的模块'
    } else if (!_this) {
      errMsg = '请传入当前loader 的this'
    }

    if (errMsg) {
      return reject(errMsg)
    }
    _this.loadModule(name, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
// 1.同步loader
// 2.异步loader
// 3.Raw loader
module.exports = async function (source, map, meta) {
  const _this = this
  const _callback = _this.async()

  try {
    // console.log(_this.resourcePath)
    console.log('this is console-none-loader')
    // const pathModule = await getModule('path', _this)
    // 用于当当前loader在处理一个文件时，如果依赖其它文件的处理结果才能得出
    // 当前文件的结果的时候，就可以通过
    // this.loadModule(request: string, callback: function (err, source, sourceMap, module))
    // 去获得request 对应文件的处理结果.

    const testJs = path.resolve(__dirname, '../', 'utils/test.js');
    _this.addDependency(testJs);
    // 如果一个loader使用外部资源(例如从文件系统读取)，必须声明它。
    // 这些信息用于使缓存loaders无效，以及在观察者模式(watch mode)下重编译。
    // -- 自动编译

    const _file = await getFile(testJs);
    // console.log(_file)
    source += '\n' + _file;
    // console.log(_this.data)
    // 结束当前 loader
    _callback(null, source, map, meta)
  } catch (e) {
    // 返回错误信息
    _callback(e)
  }
}
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  const _this = this

  // 不能改变data的指向,不然数据是传不过去的
  // data = {
  //   name: 'zhangsan'
  // }

  let _data = {
    name: 'zhangsan'
  }
  Object.assign(data, _data)
  console.log('this is console-none-loader pitching')
  // return `console.log('this is module.exports.pitch')`
  // 如果返回 string 或者 buffer 那么就不会去执行loader对应的函数
}
