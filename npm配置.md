### npm配置

查看当前的npm源

```javascript
//这会显示当前配置的源（registry）。
npm config get registry
```

设置新的npm源

```js
//切换到淘宝的 npm 镜像 可以直接替换你想用的url
npm config set registry https://registry.npm.taobao.org
```

### 使用 nrm 工具

```javascript
//nrm 是一个 npm 源管理器，可以非常方便地切换和管理多个源
npm install -g nrm
```

**列出可用的源**:

```javascript
nrm ls
//这会列出所有已知的源，包括 npm 官方源和一些常用的第三方源。
```

切换源

```javascript
nrm use taobao
```

最后验证更改

无论使用哪种方法，都可以通过再次运行 `npm config get registry` 来验证源是否已成功更改。