<template>
  <div id="search">
    <mt-search v-model="value" placeholder='输入商家或美食' cancel-text=''></mt-search>
  </div>
</template>
<script>
export default {
  name:'searchPage',
  data() {
    return {
      value:''
    }
  },
  created() {
    this.$store.commit('setTitle','搜索')
  }
}
</script>

