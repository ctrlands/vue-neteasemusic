<template>
  <div id="app">
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTips">{{tips}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号?马上登录</span>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import {setCookie, getCookie} from '../../assets/js/cookie.js'
export default {
  mounted () {
    /* 页面挂载获取cookie, 如果存在username的cookie, 则跳转到主页, 不需要登陆 */
    if (getCookie('username')) {
      this.$router.push('/home')
    }
  },
  methods: {
    login () {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = {
          'username': this.username,
          'password': this.password
        }
        /* 接口的传值是(-1, 用户不存在), (0, 密码错误), 同时还会检测管理员账号的值 */
        if (res.data == -1) {
          this.tips = "目标用户不存在";
          this.showTips = true;
        } else if (res.data == 0) {
          this.tips = "密码错误";
          this.showTips = true;
        } else if (res.data == "damin") {
          /* 路由跳转 this.$router.push */
          this.$router.push("/main");
        } else {
          this.tips = "登录成功";
          this.showTips = true;
          setCookie("username", this.username, 1000 * 60);
          setTimeout(function () {
            this.$router.push('/home');
          }.bind(this), 1000);
        }
      }
    }
  }
  /* data () {
    return {
      showLogin: true,
      showTips: false,
      tips: '',
      username: '',
      password: ''
    }
  } */
}
</script>
