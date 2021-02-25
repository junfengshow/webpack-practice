/**
 * 
 * 编译或者启动服务之前 先创建基础配置
 */
const path = require('path')
const fs = require('fs')
const fsPromise = fs.promises
const { joinPath, formatRoutes } = require('./utils')
// 创建的本地文件夹名称
const localDirName = '.dir'
// 自动创建的入口的名字
const entryName = 'appEntry.tsx'

// const entryDataStr = `
// import '../main.tsx'
// `
async function runBuild () {
  try {
    
    const dirPath = joinPath(`src/${localDirName}`)
    // 先判断文件夹是否存在
    let isDirExist = fs.existsSync(dirPath)
    
    if (!isDirExist) {
      // 文件夹不存在 先创建
      await fsPromise.mkdir(joinPath(`src/${localDirName}`))
    }
    let entryDataStr = await fsPromise.readFile(path.resolve(__dirname, 'entry.template.tsx'))
    let routesStr = await fsPromise.readFile(path.resolve(__dirname, './project.routes.js'))
    
    routesStr = formatRoutes(routesStr.toString())

    await fsPromise.writeFile(joinPath(`src/${localDirName}/routes.js`), routesStr)

    await fsPromise.writeFile(joinPath(`src/${localDirName}/${entryName}`), entryDataStr)
  } catch (e) {
    // 总体就出错了
    console.log(e)
  }
}

module.exports = {
  runBuild, entryName, localDirName
}
