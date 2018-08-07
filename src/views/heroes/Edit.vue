<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
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
  props: ['id'],
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  created() {
    // 根据id请求，英雄对象
    // axios.get('http://127.0.0.1:3001/heroes/' + this.id)
    axios
      .get(`http://127.0.0.1:3001/heroes/${this.id}`)
      .then((response) => {
        if (response.status === 200) {
          // this.formData.name = response.data.name;
          // this.formData.gender = response.data.gender;
          this.formData = response.data;
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
