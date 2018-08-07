<template>
  <div>
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios模块
import axios from 'axios';

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    // 发送异步请求，获取数据
    axios
      .get('http://127.0.0.1:3001/heroes')
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          this.list = response.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style>

</style>
