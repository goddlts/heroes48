# heroes48

> A Vue.js project

## 生成项目的文件

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




##使用vue-cli创建项目

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
