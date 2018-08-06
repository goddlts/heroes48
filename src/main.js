// 导入模块  模块块语法 CommonJS
// const Vue = require('vue');

// ES6中模块化的语法
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
