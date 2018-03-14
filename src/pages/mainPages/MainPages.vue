<template>
  <div id="main-pages">
    <common-head></common-head>
      <router-view></router-view>
    <footer>
      <router-link to="/mainPages/indexPage">首页</router-link>
      <router-link to="/mainPages/searchPage">搜索</router-link>
      <router-link to="/mainPages/ordersPage">订单</router-link>
      <router-link to="/mainPages/userPage">我的</router-link>
    </footer>
  </div>
</template>
<script>
import CommonHead from '../../components/CommonHead'
export default {
  components:{
    CommonHead
  }
}
</script>
<style lang="less">
#main-pages{
  padding-top: 40px;
  >footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    background: #fff;
    >a{
      display: inline-block;
      width: 25%;
      line-height: 1rem;
      font-size: 0.32rem;
      text-align: center;
    }
    >.router-link-active{
      color: #26a2ff;
    }
  }
}
</style>
