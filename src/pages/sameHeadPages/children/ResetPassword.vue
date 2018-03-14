<template>
  <div id="reset-password">
    <mt-field v-model="userName" placeholder='账号'></mt-field>
    <mt-field v-model="oldPassword" type='password' placeholder='旧密码'></mt-field>
    <mt-field v-model="newPassword" type='password' placeholder='新密码'></mt-field>
    <mt-field v-model="confirmPassword" type='password' placeholder='确认密码'></mt-field>
    <mt-field v-model="checkNum" placeholder='验证码'>
      <img :src="captcha" alt="">
      <span @click="getCaptcha">换一张</span>
    </mt-field>
    <mt-button type='primary' size='small' @click.native="resetPassword">重置密码</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      captcha: "",
      checkNum: ""
    };
  },
  created() {
    this.$store.commit("setTitle", "重置密码");

    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      var that = this;
      that.$axios.post("/api/v1/captchas").then(function(res) {
        that.captcha = res.data.code;
      });
    },
    resetPassword() {
      if (
        this.userName &&
        this.oldPassword &&
        this.newPassword &&
        this.confirmPassword &&
        this.checkNum
      ) {
        if (this.newPassword !== this.confirmPassword) {
          Toast({
            message: "两次输入的密码不一致",
            duration: 1000
          });
          return;
        } else {
          var params = {
            username: this.userName,
            oldpassWord: this.oldPassword,
            newpassword: this.newPassword,
            confirmpassword: this.confirmPassword,
            captcha_code: this.checkNum
          };
          var that = this;
          this.$axios
            .post("/api/v2/changepassword", params)
            .then(function(res) {
              if (res.data.success === "密码修改成功") {
                Toast({
                  message: "密码修改成功，请重新登录",
                  duration: 2000
                });
                window.localStorage.removeItem("userInfo");
                that.$router.push('/sameHeadPages/loginPage')
              } else {
                Toast({
                  message: res.data.message,
                  duration: 1000
                });
              }
            });
        }
      } else {
        Toast({
          message: "请填写完整",
          duration: 1000
        });
        return;
      }
    }
  }
};
</script>

<style lang="less">
#reset-password {
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
    margin: 0.2rem auto;
  }
}
</style>

