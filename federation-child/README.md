
```javascript
const _config = {...};
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
 
_config.plugins.push(new ModuleFederationPlugin({
  name: 'federation',
  filename: 'testFederation.js',
  exposes: {
    './User': './src/User.js',
    './Person': './src/Person.js',
    './Total': './src/Total',
  },
  shared: {
    'react': {
      eager: true,
    },
    'react-dom': {
      eager: true,
    },
  }
}));

```