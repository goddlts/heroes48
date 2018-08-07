<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="英雄性别">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // 1 绑定文本框的数据，将来也是post给服务器的数据
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    // 2 添加英雄
    handleAdd() {
      // 发送ajax请求
      axios
        .post('http://127.0.0.1:3001/heroes', this.formData)
        .then((response) => {
          // 判断是否添加成功
          if (response.status === 201) {
            // 跳转到列表页
            this.$router.push('/heroes');
          } else {
            // 失败
            alert('添加失败');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
};
</script>

<style>

</style>

