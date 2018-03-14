<template>
  <div id="same-head-items">
    <common-head></common-head>
      <router-view></router-view>
  </div>
</template>

<script>
import CommonHead from '../../components/CommonHead'
export default {
  components:{
    CommonHead
  },
  created(){
    console.log(this.$store.state.title);
    
  }
}
</script>
<style>
#same-head-items{
  padding-top: 40px;
}
</style>

