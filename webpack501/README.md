# 前端工具webpack使用到示例
> 这个项目是用来回顾webpack基础配置
> 主要内容有express中集成webpack的react、ts开发环境配置。
## 目录说明
**1).configs(项目配置文件)**
> 将webpack集成到express做为本地开发的基础环境
> 使用nodejs对文件的操作动态生成入口文件和路由配置文件
* 1.webpack基本配置
  * 1-1.webpack.base.js: webpack的基础配置
  * 1-2.webpack.dev.js: 本地开发环境的webpack配置 通过webpack-merge进行合并
  * 1-3.webpack.prod.js: 打包的webpack配置同样通过webpack-merge进行合并
* 2.服务启动和打包文件
  * 2-1.app.build: 动态创建入口文件和对路由配置进行处理
  * 2-2.app.dev.js: 通过将webpack集成到express中配置本地开发环境
  * 2-3.app.prod.js: 打包入口文件
* 3.项目配置文件/模版文件
  * 3-1.entry.template.tsx: 项目入口文件模版
  * 3-2.project.config.js: 提取项目入口、别名、端口等配置
  * 3-3.project.routes.js: react-router的简化配置文件
  
**2).public(静态资源文件)**
> 通过webpack的copy-webpack-plugin插件对资源进行拷贝
> 可以在configs/project.config.js文件中进行相关配置
* 1.prism: 代码高亮 [prism官网](https://prismjs.com)
* 2.assets: 小图标等资源

**3).src(项目源文件)**
* 1.文件夹.prodDir是用来放置启动服务/打包前初始化的文件
* 2.pages
* 3.layouts

**4).typings(ts)**
* 1.module.d.ts 全局申明文件
  
**5).tsconfig.json**   
* ts的配置文件

[githubUrl]: https://github.com/junfengshow/demo-webpack/tree/master/
[leetCodeStrHref]: [githubUrl]+src/pages/LeetCode/LeetCode.md
