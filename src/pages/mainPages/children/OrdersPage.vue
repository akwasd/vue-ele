<template>
  <div id="orders"></div>
</template>

<script>
export default {
  name: "ordersPage",
  created(){
    this.$store.commit('setTitle','订单')
  }
};
</script>

<style>

</style>
