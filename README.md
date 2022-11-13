## webpack的一些配置
+ [1.webpack 5](https://github.com/junfengshow/demo-webpack/tree/master/webpack5-base#README.md)
+ [2.webpack 4](https://github.com/junfengshow/demo-webpack/tree/master/webpack4-base#README.md)
+ [3.webpack使结果支持async](https://github.com/junfengshow/demo-webpack/tree/master/webpack-async#README.md)

## webpack5 新增的特性
### 1).长期缓存
### 2).模块联邦
+ federation-parent 主应用
+ federation-child 子应用

可实现在主应用使用子应用的组件，实现组件级别的微前端。

[详见webpack文档](https://webpack.docschina.org/concepts/module-federation/#uncaught-error-shared-module-is-not-available-for-eager-consumption)

### 3).支持崭新的web平台特性

## webpack4 配置
## 配置webpack使支持async/await


## 自定义实现 loader
> loader-base

### sync-loader 同步loader
### async-loader 异步loader
### raw loader 
### pitching loader 

## 自定义实现 plugin
> plugin-base

### plugin-base


## webpack工作过程
### 初始化阶段：
1. 初始化参数：从配置文件、 配置对象、Shell 参数中读取，与默认配置结合得出最终的参数
2. 创建编译器对象：用上一步得到的参数创建 Compiler 对象
3. 初始化编译环境：包括注入内置插件、注册各种模块工厂、初始化 RuleSet 集合、加载配置的插件等
4. 开始编译：执行 compiler 对象的 run 方法
5. 确定入口：根据配置中的 entry 找出所有的入口文件，调用 compilition.addEntry 将入口文件转换为 dependence 对象
### 构建阶段：
1. 编译模块(make)：根据 entry 对应的 dependence 创建 module 对象，调用 loader 将模块转译为标准 JS 内容，调用 JS 解释器将内容转换为 AST 对象，从中找出该模块依赖的模块，再 递归 本步骤直到所有入口依赖的文件都经过了本步骤的处理
2. 完成模块编译：上一步递归处理所有能触达到的模块后，得到了每个模块被翻译后的内容以及它们之间的 依赖关系图
### 生成阶段：
1. 输出资源(seal)：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
2. 写入文件系统(emitAssets)：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统


