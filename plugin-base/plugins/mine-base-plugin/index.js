
const pluginName = 'MineBasePlugin';

class MineBasePlugin {  
  constructor (options = {}, compiler) {}
  apply (compiler) {
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.buildModule.tap(pluginName, (module) => {
        console.log('buildModule')
      })
    })
    compiler.hooks.emit.tap(pluginName, async (compilation) => {
      // watch 时会再次执行 plugin
      // compilation.fileDependencies.add(this.filepath)
      // compilation.fileDependencies.forEach((fileDependency) => {
      //   compilation.compilationDependencies.add(fileDependency);
      // })

      console.log('emit')
      // compiler.outputFileSystem.writeFile(this.outputFile, pugStr, { encoding: 'utf8' }, () => {})
  
    });
  }
}
module.exports = MineBasePlugin;
