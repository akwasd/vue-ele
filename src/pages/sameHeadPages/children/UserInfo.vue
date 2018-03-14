<template>
  <div id="user-info">
    <mt-cell title="用户名" :value='userName'></mt-cell>
    <mt-cell title="收货地址" is-link to='/sameHeadPages/userAddress'></mt-cell>
    <mt-cell title="重置密码" is-link to='/sameHeadPages/resetPassword'></mt-cell>
    <mt-button type='danger' size='normal' @click.native="signOut">退出</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      userName:this.getLocal('userInfo').userName || ''
    }
  },
  created() {
    this.$store.commit('setTitle','账户信息')
  },
  methods:{
    signOut() {
      window.localStorage.removeItem('userInfo');
      Toast({
        message:"退出成功"
      })
      this.$router.push('/');
      
    }
  }
}
</script>
<style lang="less">
#user-info{
  >.mint-button{
    position: fixed;
    bottom: 1rem;
    left: 5%;
    width: 90%;
    
  }
}
</style>
