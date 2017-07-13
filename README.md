# React-webpack
可以用于快速搭建React项目
特点:
*   可在页面不刷新的情况下更新页面
*   在保证样式功能完整的情况下大幅度压缩js、css代码
*   生成 SourceMap，方便 debug

## how to start
```bash
# install dependencies
$ npm install

# serve with hot reload at loaclhost:8080
$ npm start

# build 
$ npm run build
```

## 0.0.1 v
*   配置`React + webpack`开发环境
*   配置`webpack-dev-server` + `react-hot-loader`
    *   react-hot-loader 可以在页面不刷新的情况下渲染页面内容
    *   webpack-dev-server 可以实时监听文件更改情况，达到热重启效果
    *   配置文档 ——> https://webpack.js.org/guides/hmr-react/

## 0.0.2 v
*   用class生成一个App组件
    *   `constructor`方法
    *   `import export eg..`

## 0.0.3 v
*   `lifecycle` —— componetDidMount & componentWillUnmount
*   The only place where you can assign `this.state` is the **constructor**.
*   翻译官方文档`state and lifecycle` http://www.cnblogs.com/tim100/p/6792149.html


