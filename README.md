# heroes48

> A Vue.js project

## 首页

- 把静态页面的代码粘贴到 App.vue的模板中
- 安装bootstrap@3.3.7
- 在main.js 中全局引入 样式

```js
// 导入全局样式
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';
```

- 配置字体，webpack.config.js中

```json
{
  test: /\.(ttf|woff2|woff|eot)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]?[hash]'
  }
}
```

- 运行 npm run dev


## src目录的分类

- components 存放公共的组件
- views  存放‘页面’ 根据路由变化的组件
- routes 路由

## 生成项目的文件

```
src 源代码
src/assets   存储静态资源 （图片，样式）
src/App.vue  单文件组件  -- 根组件
src/main.js  入口文件

认为 在index.html中引用了main.js

.babelrc   是babel这个工具的配置文件，babel是用来把ES6->ES5
.editorconfig  编辑器的配置文件
.gitignore  git的忽略文件
index.html  单文件首页
webpack.config.js   webpack的配置文件
```


## 使用vue-cli创建项目

- 安装vue-cli

```bash
npm i -g vue-cli
```

- 创建项目

```bash
vue init webpack-simple 你项目的名称
```


## Build Setup

``` bash
cd 你项目的名称

# install dependencies
npm install


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
