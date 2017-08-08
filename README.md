# React-webpack
用于快速搭建React项目
特点:
*   可在页面不刷新的情况下更新页面 => 使用HMR
*   在保证样式功能完整的情况下大幅度压缩js、css代码
*   生成 SourceMap，方便 debug

## 项目首页
![TimRChen](https://raw.githubusercontent.com/TimRChen/photoRepo/master/react-webpack/2017-08-07%2016_47_10.gif)

## how to start
```bash
# install dependencies
$ npm install

# serve with hot reload at loaclhost:3000
$ npm start

# dev at loaclhost:3000
$ npm run dev

# build file in dist
$ npm run build
```

## 0.0.5 v
*   加入 React-router 最新版本
*   引入双向绑定输入案例

## 0.0.4 v
*   加入演示案例 todolist
*   将主页Logo格式替换为svg
*   替换整体背景色


## 0.0.3 v
*   优化项目主页
*   webpack 加入文件加载器
    *   加入file-loader & url-loader

## 0.0.2 v
*   加入分块 & 压缩插件

## 0.0.1 v
*   配置`React + webpack`开发环境
*   配置`webpack-dev-server` + `react-hot-loader`
    *   react-hot-loader 可以在页面不刷新的情况下渲染页面内容
    *   webpack-dev-server 可以实时监听文件更改情况，达到热重启效果
    *   配置文档 ——> https://webpack.js.org/guides/hmr-react/

## 实例
*   用class生成一个App组件
    *   `constructor`方法
    *   `import export eg..`
*   `lifecycle` —— componetDidMount & componentWillUnmount
*   The only place where you can assign `this.state` is the **constructor**.
*   翻译官方文档`state and lifecycle` http://www.cnblogs.com/tim100/p/6792149.html


