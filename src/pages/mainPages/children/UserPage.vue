<template>
  <div id="user">
    <mt-cell :title='title' label='暂未绑定手机号' is-link 
    :to='path'>
    </mt-cell>
  </div>
</template>
<script>
export default {
  name:'userPage',
  data() {
    return {
      path:'/sameheadPages/loginPage',
      title:'登录/注册'
    }
  },
  
  created() {
    this.$store.commit('setTitle','我的');
    this.setUser()
  },
  methods:{
    setUser(){
      if(this.getLocal('userInfo')) {
        this.title = this.getLocal('userInfo').userName;
        this.path = '/sameHeadPages/userInfo'
      } else { return }
    }
  }
}
</script>
<style lang="less">
#user{

}
</style>
