<template>
  <div id="login">
    <mt-field v-model="username" placeholder='账号'></mt-field>
    <mt-field v-model="password" :type='shouPassword?"text":"password"' placeholder='密码'
    disableClear>
      <mt-switch v-model="shouPassword"></mt-switch>
    </mt-field>
    <mt-field v-model="checkNum" placeholder='验证码'>
      <img :src="captcha" alt="">
      <span @click="getCaptcha">换一张</span>
    </mt-field>
    <div class="tip">温馨提示：未注册时将自动注册并登录</div>
    <mt-button type='primary' size='small' @click.native="login">登录</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      shouPassword: false,
      captcha: "",
      checkNum: ""
    };
  },
  created() {
    
    this.$store.commit("setTitle", "登录/注册");
    
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      var that = this;
      that.$axios.post("/api/v1/captchas").then(function(res) {
        that.captcha = res.data.code;
      });
    },
    setUserInfo(data){
      var userInfo = {};
      userInfo.userId = data.id;
      userInfo.userName = data.username;
      userInfo.balance = data.balance;
      this.setLocal('userInfo',userInfo)
    },
    login() {
      if (this.username && this.password && this.checkNum) {
        var params = {
          username: this.username,
          password: this.password,
          captcha_code: this.checkNum
        };
        var that = this;
        this.$axios.post("/api/v2/login", params).then(function(res) {
          console.log(res.data);
          var message = "";
          if (res.data.avatar) {
            message = "登陆成功";
            that.setUserInfo(res.data);
          } else {
            if (res.data.message === "密码错误") that.password = "";
            message = res.data.message;
            that.checkNum = "";
            that.getCaptcha();
          }
          Toast({
            message: message,
            duration: 1000
          });
          if(message === '登陆成功') that.$router.go(-1);
        });
      } else {
        Toast({
          message: "请填写完整",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="less">
#login {
  header {
    margin-bottom: 0.3rem;
  }
  > .mint-cell {
    margin-top: 0.02rem;
  }
  > .tip {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    line-height: 0.5rem;
    color: red;
  }
  > .mint-button {
    margin-top: 0.2rem;
    display: block;
    width: 95%;
    margin: 0 auto;
  }
}
</style>

