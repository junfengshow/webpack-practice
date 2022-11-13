

```javascript
const _config = {...};
_config.module.rules.push({
  test: /\.tpl$/,
  use: [
    {
      loader: getPath('rules/console-none-loader'),
      options: {
        allowCache: false
      }
    },
    './rules/pitch-loader-1',
    './rules/pitch-loader-2',
  ]
})
```
```bash
# this is pitch-loader-1 pitching
# this is pitch-loader-2 pitching
# this is pitch-loader-2
# this is pitch-loader-1
```

[参考文档](https://zhuanlan.zhihu.com/p/375626250)
