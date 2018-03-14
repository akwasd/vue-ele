<template>
  <mt-header :title="$store.state.title" fixed>
    <mt-button icon='back' slot="left" @click="$router.go(-1)">
    </mt-button>
    <div slot="right">
      <slot></slot>
    </div>
  </mt-header>
</template>
<style lang='less'>
.mint-header {
  a {
    color: #fff;
  }
}
</style>

