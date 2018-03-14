<template>
  <div id="user-address"></div>
</template>
<script>
export default {
  created() {
    this.$store.commit('setTitle','收货地址')
  }
}
</script>
