

```javascript
// 联邦模块
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

// 导入模块
_config.plugins.push(new ModuleFederationPlugin({
  name: 'federation',
  remotes: {
    remoteHost: 'federation@http://127.0.0.1:8080/testFederation.js'
  },
  shared: {
    'react': {
      eager: true,
      import: 'react',
      shareKey: 'react',
      shareScope: 'default',
      singleton: true,
      requiredVersion: depts['react'],
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: depts['react-dom'],
    },
  }
}));
```