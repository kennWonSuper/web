<template>
  <div class="body">
    <el-form ref="form" :model="form" label-width="80px" class="form-body">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin: function () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style scoped>
  .body{
    width: 100%;
    height: 100%;
    background: url("../assets/images/background.jpg");
    border: 1px solid #111;
  }
  .form-body{
    width: 380px;
    margin: 200px auto;
    padding: 40px 40px;
    text-align: right;
    background: #fff;
    border-radius: 4px;
    -moz-box-shadow:2px 2px 15px #CFE7FF;
    -webkit-box-shadow:2px 2px 15px #CFE7FF;
    box-shadow:2px 2px 15px #CFE7FF;
  }
</style>
